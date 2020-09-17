const express = require('express');
const PotentialUserModel = require('../models/potential.user.model');
const RegisterService = require('../services/register.service');
const AuthenticatorService = require('../services/authenticator.service');
const bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser.urlencoded({extended: true,}));

router.use(bodyParser.json());

router.get('/user/home', (req, res) => {
    res.send('Should return users home page');
    res.end();
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
    authService.login(res);
});

module.exports = router;