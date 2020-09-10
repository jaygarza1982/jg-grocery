const express = require('express');
const UserModel = require('../models/user.model');
const RegisterService = require('../services/register.service');
const bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser.urlencoded({extended: true,}));

router.use(bodyParser.json());

router.get('/user/home', (req, res) => {
    res.send('Should return users home page');
    res.end();
});

router.post('/user/register', (req, res) => {
    let newUser = new UserModel();
    newUser.fullname = 'test fullname';
    newUser.username = req.body.username;
    newUser.password = req.body.password;
    let regService = new RegisterService(newUser);
    regService.register(res);
});

module.exports = router;