const express = require('express');
const getDonationController = require('../controllers/donateGetData')
const checkAuth = require('../middlewares/check-auth');
const router = express.Router();

router.get('/getDonation',
            checkAuth,
            getDonationDataUser
        )

function getDonationDataUser(req, res){
    getDonationController
        .getDonationData(req, res)
        .then((data) => {})
        .catch((err) => console.log(err));
}

module.exports = router;
