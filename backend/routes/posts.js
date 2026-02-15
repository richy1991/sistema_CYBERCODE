const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../database');

const router = express.Router();

const JWT_SECRET = 'your_super_secret_jwt_key'; // Should be the same as in auth.js

// Auth middleware
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

// GET /api/posts
router.get('/', (req, res) => {
    const sql = `
        SELECT
            p.id,
            p.content,
            p.image,
            p.category,
            p.timestamp,
            u.id as user_id,
            u.name as author_name,
            u.nickname as author_nickname,
            u.avatar as author_avatar,
            u.role as author_role,
            u.verified as author_verified,
            (SELECT COUNT(*) FROM likes WHERE post_id = p.id) as likes,
            (SELECT COUNT(*) FROM comments WHERE post_id = p.id) as comments
        FROM posts p
        JOIN users u ON p.user_id = u.id
        ORDER BY p.timestamp DESC
    `;

    db.all(sql, [], (err, posts) => {
        if (err) {
            return res.status(500).json({ message: "Error fetching posts.", error: err.message });
        }
        // In a real app, you'd also fetch tags for each post here.
        // For simplicity, we'll omit that for now.
        res.json(posts.map(post => ({
            id: post.id,
            content: post.content,
            image: post.image,
            category: post.category,
            timestamp: post.timestamp,
            author: {
                id: post.user_id,
                name: post.author_name,
                nickname: post.author_nickname,
                avatar: post.author_avatar,
                role: post.author_role,
                verified: post.author_verified === 1
            },
            likes: post.likes,
            comments: post.comments,
            shares: 0, // Placeholder
            tags: [] // Placeholder
        })));
    });
});

// POST /api/posts
router.post('/', authMiddleware, (req, res) => {
    const { content, category, tags } = req.body;
    const userId = req.user.id;

    if (!content || !category) {
        return res.status(400).json({ message: 'Content and category are required.' });
    }

    const sql = `INSERT INTO posts (user_id, content, category) VALUES (?, ?, ?)`;
    db.run(sql, [userId, content, category], function(err) {
        if (err) {
            return res.status(500).json({ message: "Error creating post.", error: err.message });
        }
        // In a real app, you would handle tags here.
        // For now, we'll just return the new post.
        const newPostId = this.lastID;
        const selectSql = `
            SELECT
                p.id, p.content, p.category, p.timestamp,
                u.name as author_name, u.avatar as author_avatar
            FROM posts p
            JOIN users u ON p.user_id = u.id
            WHERE p.id = ?
        `;
        db.get(selectSql, [newPostId], (err, post) => {
            if (err) {
                return res.status(500).json({ message: "Error fetching new post.", error: err.message });
            }
            res.status(201).json({
                 id: post.id,
                 content: post.content,
                 category: post.category,
                 timestamp: post.timestamp,
                 author: { name: post.author_name, avatar: post.author_avatar },
                 likes: 0,
                 comments: 0,
                 shares: 0,
                 tags: []
            });
        });
    });
});


// POST /api/posts/:id/like
router.post('/:id/like', authMiddleware, (req, res) => {
    const postId = req.params.id;
    const userId = req.user.id;

    const checkSql = `SELECT * FROM likes WHERE user_id = ? AND post_id = ?`;
    db.get(checkSql, [userId, postId], (err, row) => {
        if (err) {
            return res.status(500).json({ message: "Database error.", error: err.message });
        }

        if (row) {
            // User has already liked, so unlike
            const deleteSql = `DELETE FROM likes WHERE user_id = ? AND post_id = ?`;
            db.run(deleteSql, [userId, postId], function(err) {
                if (err) {
                    return res.status(500).json({ message: "Error unliking post.", error: err.message });
                }
                res.json({ message: "Post unliked successfully." });
            });
        } else {
            // User has not liked yet, so like
            const insertSql = `INSERT INTO likes (user_id, post_id) VALUES (?, ?)`;
            db.run(insertSql, [userId, postId], function(err) {
                if (err) {
                    return res.status(500).json({ message: "Error liking post.", error: err.message });
                }
                res.json({ message: "Post liked successfully." });
            });
        }
    });
});

module.exports = router;
