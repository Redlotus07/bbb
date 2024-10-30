const express = require('express');
const { logAction } = require('../controllers/auditController');
const router = express.Router();

router.post('/', logAction);

// Additional routes for audit trails can be added here

module.exports = router;