const express = require('express');
const cors = require('cors');
const db = require('./database.js'); // Import the database connection

const authRoutes = require('./routes/auth.js');
const postRoutes = require('./routes/posts.js');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: "CyberCode Backend is running!" });
});

// Start the server
// I will comment this out for now, as I cannot run it.
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

module.exports = app; // Export app for potential testing in the future
