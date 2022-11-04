const User = require('../models/user');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

// Register User
exports.signup = (req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            error: errors.array()[0].msg
        })
    }

    console.log(req.body);
    const user = new User(req.body)
    user.save((err, user) => {
        if(err) {
            return res.status(400).json({
                success: false,
                error: "Invalid Request! Email or Username already exists!"
            })
        }
        res.json({
            success: true,
            user: 
            {
                username: user.username,
                email: user.email,
                id: user._id
            }
        });
    })
}

// Sign In User
exports.signin = (req, res) => {
    const {password, username} = req.body;
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            error: errors.array()[0].msg
        })
    }

    User.findOne({username}, (err, user) => {
        if(err || !user) {
            return res.status(400).json({
                success: false,
                error: "Username not found"
            })
        }
        if(!user.authenticate(password)) {
            return res.status(401).json({
                success: false,
                error: "Invalid Credentials"
            })
        }

        // Create Token
        const token = jwt.sign({_id: user._id}, process.env.SECRET)

        // Put token in cookie
        res.cookie('token', token, {expire: new Date() + 9999});

        // Send response to front end
        const {_id, username, email} = user;
        
        return res.json({
            success: true,
            token, 
            user: {id: _id, username, email}
        });
    })

}

// Signout
exports.signout = (req, res) => {
    res.clearCookie('token');
    res.json({
        message: "User signed out"
    });
}
