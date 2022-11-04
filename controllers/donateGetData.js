const UserData = require('../models/user');
const donationData = require('../models/donation')

async function getDonationData(req, res){
    res.send(200)
}

module.exports = {
    getDonationData
}