const express = require('express');
const { submitFeedback } = require('../controllers/feedbackController');
const router = express.Router();

router.post('/', submitFeedback);

// Additional routes for feedback can be added here

module.exports = router;