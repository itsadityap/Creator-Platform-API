const express = require('express');
const AllDataController = require("../controllers/allData")
const router = express.Router();

router.get('/alldata', getAllData);

function getAllData(req, res){
    AllDataController
        .getAll(req, res)
        .then((data) => {})
        .catch((err) => console.log(err))
}

module.exports = router;
