const express = require('express');
const PotentialUserModel = require('../models/potential.user.model');
const RegisterService = require('../services/register.service');
const AuthenticatorService = require('../services/authenticator.service');
const bodyParser = require('body-parser');
const session = require('express-session');

var router = express.Router();
router.use(bodyParser.urlencoded({extended: true,}));

router.use(bodyParser.json());
router.use(require('cookie-parser')());
router.use(session({
    secret: 'CHANGE_LATER',
    resave: true,
    saveUninitialized: true,
}));

router.get('/user/home', (req, res) => {
    console.log('Cookie dump below');
    console.log(req.session);
    // console.log(req.session);
    console.log('End cookie dump');
    res.json({data: 'Should return data about the users home page. Username: ' + req.session.user.username})
});

router.post('/user/register', (req, res) => {
    let newUser = new PotentialUserModel();
    newUser.username = req.body.username;
    newUser.password = req.body.password;
    newUser.passwordConfirm = req.body.passwordConfirm;
    let regService = new RegisterService(newUser);
    regService.register(res);
});

router.post('/user/login', (req, res) => {
    let user = new PotentialUserModel();
    user.username = req.body.username;
    user.password = req.body.password;

    let authService = new AuthenticatorService(user);
    authService.login(req, res);
});

module.exports = router;