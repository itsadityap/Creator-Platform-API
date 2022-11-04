const DonationData = require('../models/user');
const jwt = require('jsonwebtoken');

async function getDonationData(req, res){

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET)._id;
    
    let donationData = []

    await DonationData.findOne({_id:decoded},async function(err, result){
        //console.log(result);
        if(err)
        {
            res.status(404).send({status:"Error in fetching in your database!!"})
        }

        if(result)
        {   
            for(let i=0;i<result.donation.length;i++)
            {
                donationData.push({
                    "message":result.donation[i].message,
                    "currency":result.donation[i].currency,
                    "amount":result.donation[i].amount,
                    "ToCreatorID":result.donation[i].ToCreatorID
                })
            }
            res.status(200).send(donationData);
        }
        
        else
        {
            res.status(400).send({status:"Unexpected Error in adding donation data"})
        }
    }   
    ).lean()
}

module.exports = {
    getDonationData
}