const Notification = require('../models/Notification');

exports.sendNotification = async (req, res) => {
    const { userId, message } = req.body;

    try {
        const notification = new Notification({ userId, message });
        await notification.save();
        res.status(201).json(notification);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Additional methods for handling notifications can be added here