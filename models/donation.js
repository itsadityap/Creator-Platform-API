const mongoose = require('mongoose');

const DonationSchema = mongoose.Schema({
    currency: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    ToCreator: {
        type: String,
        required: true
    } 
}, {
    timestamps: true
});

DonationSchema.set("toJSON", {
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});

module.exports = mongoose.model("Donation", DonationSchema);