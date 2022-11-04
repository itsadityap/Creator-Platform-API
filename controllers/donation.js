const DonationData = require("../models/user")

async function Donate (req, res) 
{
    const Donation = new DonationData(req.body)
    // console.log(Donation);
    Donation.save((err, user) => {
        if(err) {
            return res.status(400).json({
                success: false,
                error: "Invalid Request"
            })
        }
        res.json({
            success: true,
            Donation: {
                currency: user.currency,
                amount: user.amount,
                message: user.message,
                ToCreator: user.ToCreator,
                id: user._id
            }
        });
    })
}

module.exports = {
    Donate
}
