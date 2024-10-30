const AuditTrail = require('../models/AuditTrail');

exports.logAction = async (req, res) => {
    const { userId, action, timestamp } = req.body;

    try {
        const auditEntry = new AuditTrail({ userId, action, timestamp });
        await auditEntry.save();
        res.status(201).json(auditEntry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Additional methods for handling audit trails can be added here