const express = require('express');
const {isSignedIn, isAuthenticated} = require('../controllers/auth');
const DonationController = require("../controllers/donation")
const router = express.Router();

router.post('/donate',
            isSignedIn,
            Donate);

function Donate(req, res){
    DonationController
        .Donate(req, res)
        .then((data) => {})
        .catch((err) => console.log(err))
}

module.exports = router;
