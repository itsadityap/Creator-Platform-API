const User = require('../models/user');
const DonationSchema = require("../models/donation")
const {isSignedIn, isAuthenticated} = require('../controllers/auth')
const jwt = require('jsonwebtoken');

function userVerification(req, res, next) 
{
    //let authorization = req.headers.authorization.split(' ')[1],decoded;
    // decoded = jwt.verify(authorization, secret);
    // req.body.id = decoded.id;
    // if(decoded.id){
    //     next();
    // }else{
    //     res.send("Verification Failed.");
    // }

    let token = req.cookies.jwt;
    
}

async function Donate (req, res) {

    if(isSignedIn)
    {
        res.send(400)
    }
}

module.exports = {
    Donate
}