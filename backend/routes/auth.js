const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../database');

const router = express.Router();

const JWT_SECRET = 'your_super_secret_jwt_key'; // In a real app, use an environment variable

// Función para generar un nickname único
const generateUniqueNickname = (name, provider) => {
    const baseName = name.toLowerCase().replace(/\s+/g, '');
    return `${baseName}${provider === 'email' ? '' : '_' + provider.substring(0, 2)}${Math.random().toString(36).substr(2, 5)}`;
};

// POST /api/auth/register
router.post('/register', async (req, res) => {
    const { name, email, password, provider = 'email' } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Please provide name and email." });
    }

    if (provider === 'email' && !password) {
        return res.status(400).json({ message: "Password is required for email registration." });
    }

    try {
        // Check if user already exists
        const existingUser = await new Promise((resolve, reject) => {
            db.get(`SELECT email FROM users WHERE email = ?`, [email], (err, row) => {
                if (err) reject(err);
                resolve(row);
            });
        });

        if (existingUser) {
            return res.status(409).json({ message: "User with this email already exists." });
        }

        const nickname = generateUniqueNickname(name, provider);
        let hashedPassword = null;

        if (provider === 'email' && password) {
            const salt = await bcrypt.genSalt(10);
            hashedPassword = await bcrypt.hash(password, salt);
        }

        // Insert user into database
        const sql = `INSERT INTO users (name, nickname, email, password, avatar, role, auth_provider) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const params = [name, nickname, email, hashedPassword, '/api/placeholder/40/40', 'Miembro de la Comunidad', provider];

        db.run(sql, params, function(err) {
            if (err) {
                return res.status(500).json({ message: "Error registering user.", error: err.message });
            }
            res.status(201).json({ message: "User registered successfully.", userId: this.lastID, nickname });
        });

    } catch (error) {
        res.status(500).json({ message: "Server error during registration.", error: error.message });
    }
});

// POST /api/auth/login
router.post('/login', (req, res) => {
    const { email, password, provider = 'email' } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Please provide email." });
    }

    if (provider === 'email' && !password) {
        return res.status(400).json({ message: "Please provide email and password." });
    }

    const sql = `SELECT * FROM users WHERE email = ?`;
    db.get(sql, [email], async (err, user) => {
        if (err) {
            return res.status(500).json({ message: "Server error during login.", error: err.message });
        }
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials." });
        }

        try {
            // If using OAuth provider
            if (provider !== 'email') {
                if (user.auth_provider !== provider) {
                    return res.status(401).json({ message: `User registered with ${user.auth_provider}, not ${provider}.` });
                }
            } else {
                // Validate password for email auth
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    return res.status(401).json({ message: "Invalid credentials." });
                }
            }

            const payload = {
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    nickname: user.nickname,
                    avatar: user.avatar
                }
            };

            jwt.sign(
                payload,
                JWT_SECRET,
                { expiresIn: '1h' },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            name: user.name,
                            nickname: user.nickname,
                            email: user.email,
                            avatar: user.avatar
                        }
                    });
                }
            );
        } catch (error) {
            res.status(500).json({ message: "Server error during password comparison.", error: error.message });
        }
    });
});

// Middleware to protect routes
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


// POST /api/auth/find-user - Find user by email and provider
router.post('/find-user', (req, res) => {
    const { email, provider = 'email' } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required." });
    }

    const sql = `SELECT * FROM users WHERE email = ? AND auth_provider = ?`;
    db.get(sql, [email, provider], (err, user) => {
        if (err) {
            return res.status(500).json({ message: "Server error during user lookup.", error: err.message });
        }
        
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        res.json({ user });
    });
});

// GET /api/auth/me - Get the current logged in user
router.get('/me', authMiddleware, (req, res) => {
    // The user object is attached to the request by the authMiddleware
    // We just need to find the full user details from the database
    const sql = `SELECT id, name, nickname, email, avatar, role, verified FROM users WHERE id = ?`;
    db.get(sql, [req.user.id], (err, user) => {
        if (err) {
            return res.status(500).json({ message: "Server error.", error: err.message });
        }
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        res.json(user);
    });
});


module.exports = router;
