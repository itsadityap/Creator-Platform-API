const express = require('express');
const router = express.Router();
const {signout, signup, signin} = require('../controllers/auth');
const { check } = require('express-validator');

router.post('/signup', [
    check('username')
        .isLength({min: 3})
        .withMessage('Usernames must be at least 3 characters long.'),
    check('email')
        .isEmail()
        .withMessage('A valid email is required.'),
    check('password')
        .isLength({min: 6})
        .withMessage('Password length must be at least 6')
], signup);

router.post('/signin', [
    check('password')
        .isLength({min: 6})
        .withMessage('Invalid Password Length!')
], signin);


router.get('/signout', signout);

module.exports = router;