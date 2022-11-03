const User = require('../models/user');

async function getAll (req, res) {
    
    let data = await User.find();
    let AllData = [];

    for(let i=0;i<data.length;i++)
    {
        AllData.push({
            "Name":data[i].name,
            "email":data[i].email,
            "profession":data[i].profession,
            "profileURL":data[i].profileURL
        })
    }
    res.send(AllData)
}

module.exports = {
    getAll
}