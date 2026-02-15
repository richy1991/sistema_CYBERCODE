const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "cybercode.db";

const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message);
      throw err;
    } else {
        console.log('Connected to the SQLite database.');
        db.serialize(() => {
            // Create Users table
            db.run(`CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                nickname TEXT UNIQUE,
                email TEXT UNIQUE NOT NULL,
                password TEXT,
                avatar TEXT,
                role TEXT,
                auth_provider TEXT DEFAULT 'email',
                verified INTEGER DEFAULT 0,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`, (err) => {
                if (err) {
                    console.error("Error creating users table", err.message);
                }
            });

            // Create Posts table
            db.run(`CREATE TABLE IF NOT EXISTS posts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER,
                content TEXT NOT NULL,
                image TEXT,
                category TEXT,
                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users (id)
            )`, (err) => {
                if (err) {
                    console.error("Error creating posts table", err.message);
                }
            });

            // Create Likes table
            db.run(`CREATE TABLE IF NOT EXISTS likes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER,
                post_id INTEGER,
                FOREIGN KEY (user_id) REFERENCES users (id),
                FOREIGN KEY (post_id) REFERENCES posts (id),
                UNIQUE(user_id, post_id)
            )`, (err) => {
                if (err) {
                    console.error("Error creating likes table", err.message);
                }
            });

            // Create Comments table
            db.run(`CREATE TABLE IF NOT EXISTS comments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                post_id INTEGER,
                user_id INTEGER,
                content TEXT NOT NULL,
                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (post_id) REFERENCES posts (id),
                FOREIGN KEY (user_id) REFERENCES users (id)
            )`, (err) => {
                if (err) {
                    console.error("Error creating comments table", err.message);
                }
            });

            // Create Tags table
            db.run(`CREATE TABLE IF NOT EXISTS tags (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT UNIQUE NOT NULL
            )`, (err) => {
                if (err) {
                    console.error("Error creating tags table", err.message);
                }
            });

            // Create Post_Tags table
            db.run(`CREATE TABLE IF NOT EXISTS post_tags (
                post_id INTEGER,
                tag_id INTEGER,
                PRIMARY KEY (post_id, tag_id),
                FOREIGN KEY (post_id) REFERENCES posts (id),
                FOREIGN KEY (tag_id) REFERENCES tags (id)
            )`, (err) => {
                if (err) {
                    console.error("Error creating post_tags table", err.message);
                }
            });

            // Create Developers table
            db.run(`CREATE TABLE IF NOT EXISTS developers (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                apellido TEXT NOT NULL,
                teléfono TEXT,
                email TEXT UNIQUE NOT NULL,
                perfil_git TEXT,
                linkedin TEXT,
                bio TEXT,
                skills TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`, (err) => {
                if (err) {
                    console.error("Error creating developers table", err.message);
                }
            });

            // Create Campaigns table
            db.run(`CREATE TABLE IF NOT EXISTS campaigns (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                description TEXT,
                discount INTEGER,
                active INTEGER DEFAULT 1,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`, (err) => {
                if (err) {
                    console.error("Error creating campaigns table", err.message);
                }
            });

            // Create Discounts table
            db.run(`CREATE TABLE IF NOT EXISTS discounts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                code TEXT UNIQUE NOT NULL,
                percentage INTEGER NOT NULL,
                active INTEGER DEFAULT 1,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`, (err) => {
                if (err) {
                    console.error("Error creating discounts table", err.message);
                }
            });

            // Create User Interactions table
            db.run(`CREATE TABLE IF NOT EXISTS user_interactions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER,
                action TEXT NOT NULL,
                post_id INTEGER,
                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users (id),
                FOREIGN KEY (post_id) REFERENCES posts (id)
            )`, (err) => {
                if (err) {
                    console.error("Error creating user_interactions table", err.message);
                }
            });

            // Migration: Add nickname and auth_provider columns if they don't exist
            db.serialize(() => {
                // Try to add nickname column
                db.run(`ALTER TABLE users ADD COLUMN nickname TEXT UNIQUE`, (err) => {
                    // Ignore if column already exists
                    if (err && err.message.includes('duplicate')) {
                        console.log('Column "nickname" already exists');
                    }
                });

                // Try to add auth_provider column
                db.run(`ALTER TABLE users ADD COLUMN auth_provider TEXT DEFAULT 'email'`, (err) => {
                    // Ignore if column already exists
                    if (err && err.message.includes('duplicate')) {
                        console.log('Column "auth_provider" already exists');
                    }
                });
            });
        });
    }
});

module.exports = db;
