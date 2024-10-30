module.exports = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/beekeeper-ai',
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
};