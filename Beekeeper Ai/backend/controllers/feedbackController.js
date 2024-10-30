const Feedback = require('../models/Feedback');

exports.submitFeedback = async (req, res) => {
    const { userId, message } = req.body;

    try {
        const feedback = new Feedback({ userId, message });
        await feedback.save();
        res.status(201).json(feedback);
    } catch (error) {
        res.status(500).json({ message: error