module.exports = {
  ...require('./config'), // Import base config
  MONGODB_URI: process.env.TEST_MONGODB_URI || 'mongodb://localhost:27017/beekeeper-ai-test', // Use a separate test database
  JWT_SECRET: 'test_secret', // Use a different JWT secret for testing
  // Additional testing-specific settings can be added here
};