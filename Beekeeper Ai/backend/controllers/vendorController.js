const Vendor = require('../models/Vendor');

exports.addVendor = async (req, res) => {
    const { name, contactInfo } = req.body;

    try {
        const vendor = new Vendor({ name, contactInfo });
        await vendor.save();
        res.status(201).json(vendor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Additional methods for handling vendors can be added hereconst Vendor = require('../models/Vendor');

exports.addVendor = async (req, res) => {
    const { name, contactInfo } = req.body;

    try {
        const vendor = new Vendor({ name, contactInfo });
        await vendor.save();
        res.status(201).json(vendor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Additional methods for handling vendors can be added here