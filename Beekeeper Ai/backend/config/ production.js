module.exports = {
  ...require('./config'), // Import base config
  MONGODB_URI: process.env.MONGODB_URI, // Use the production MongoDB URI
  JWT_SECRET: process.env.JWT_SECRET, // Use the production JWT secret
  // Additional production-specific settings can be added here
};