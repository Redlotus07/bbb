const express = require('express');
const { addVendor } = require('../controllers/vendorController');
const router = express.Router();

router.post('/', addVendor);

// Additional routes for vendors can be added here

module.exports = router;