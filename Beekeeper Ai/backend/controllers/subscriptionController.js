const Subscription = require('../models/Subscription');

exports.createSubscription = async (req, res) => {
    const { userId, plan } = req.body;

    try {
        const subscription = new Subscription({ userId, plan });
        await subscription.save();
        res.status(201).json(subscription);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Additional methods for handling subscriptions can be added here