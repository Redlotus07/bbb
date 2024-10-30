const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true },
    plan: { type: String, required: true },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date },
});

module.exports = mongoose.model('Subscription', subscriptionSchema);