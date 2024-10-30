const express = require('express');
const { addExpense } = require('../controllers/financeController');
const router = express.Router();

router.post('/expenses', addExpense);

// Additional routes for finance can be added here

module.exports = router;