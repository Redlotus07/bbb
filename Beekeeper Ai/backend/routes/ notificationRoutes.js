const express = require('express');
const { sendNotification } = require('../controllers/notificationController');
const router = express.Router();

router.post('/', sendNotification);

// Additional routes for notifications can be added here

module.exports = router;