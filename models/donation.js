const mongoose = require('mongoose');

const DonationSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
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
        type: _id,
        required: true
    } 
}, {
    timestamps: true
});

CreatorSchema.set("toJSON", {
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});

module.exports(mongoose.model("Donation", DonationSchema));