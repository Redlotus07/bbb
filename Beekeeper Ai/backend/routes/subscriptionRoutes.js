const express = require('express');
const { createSubscription } = require('../controllers/subscriptionController');
const router = express.Router();

router.post('/', createSubscription);

// Additional routes for subscriptions can be added here

module.exports = router;