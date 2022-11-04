const express = require('express');
const DonationController = require("../controllers/donation")
const checkAuth = require('../middlewares/check-auth');
const router = express.Router();

router.post('/donate',
            checkAuth,
            DonateRoute);

function DonateRoute(req, res){
    DonationController
        .Donate(req, res)
        .then((data) => {})
        .catch((err) => console.log(err))
}

module.exports = router;
