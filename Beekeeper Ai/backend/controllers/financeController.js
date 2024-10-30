const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
    const { userId, amount, description } = req.body;

    try {
        const expense = new Expense({ userId, amount, description });
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Additional methods for handling finance can be added here