// Load environment variables from .env file
require('dotenv').config();

// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan'); // For logging requests
const helmet = require('helmet'); // For security
const rateLimit = require('express-rate-limit'); // For rate limiting

// Import routes
const authRoutes = require('./routes/authRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const financeRoutes = require('./routes/financeRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');

// Create an Express application
const app = express();

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());
app.use(morgan('dev')); // Log requests to the console
app.use(helmet()); // Secure the app by setting various HTTP headers

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define API routes
app.use('/api/auth', authRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/finance', financeRoutes);
app.use('/api/subscription', subscriptionRoutes);

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Beekeeper AI backend API!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});