module.exports = {
  ...require('./config'), // Import base config
  MONGODB_URI: process.env.DEV_MONGODB_URI || 'mongodb://localhost:27017/beekeeper-ai-dev', // Use a separate development database
  JWT_SECRET: 'dev_secret', // Use a different JWT secret for development
  // Additional development-specific settings can be added here
};