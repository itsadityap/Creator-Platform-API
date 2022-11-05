const DonationData = require("../models/user")
const jwt = require('jsonwebtoken');
async function Donate (req, res) 
{
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET)._id;
    const validateCreatorID = req.body.ToCreatorID;
    

    await DonationData.findOne({_id:validateCreatorID},async function(err, result)
    {
        if(err)
        {
            res.status(404).send({status:"The creator you want was not found in the database."})
        }

        if(result && (decoded!=validateCreatorID))
        {
            let foundUser = await DonationData.findOne({_id:decoded});
            foundUser.donation.push({
                "currency":req.body.currency,
                "amount":req.body.amount,
                "message":req.body.message,
                "ToCreatorID":req.body.ToCreatorID
            })    
            await foundUser.save()  
            res.status(200).send({status:"Your Donation is being successfully transferred."})
        }

        else
        {
            res.status(400).send({status:"Unexpected Error in adding donation data"})
        }
    }   
    ).select("_id")
     .lean()
}

module.exports = {
    Donate
}
