//importing packages
const express = require('express');
const router = express.Router();
const users = require('../routes/services/users');
const tires = require('../routes/services/tires');

router.get('/get', function (req, res) {
    console.log('Get Mazhar')
    res.status(200).json({ msg: `It's a GET request.` });
});
router.post('/post', function (req, res) {
    res.status(200).json({ msg: `It's a POST request.` });
});
router.put('/put', function (req, res) {
    res.status(200).json({ msg: `It's a PUT request.` });
});
router.delete('/', function (req, res) {
    res.status(200).json({ msg: `It's a DELETE request.` });
});


/* GET All Users */
router.get('/getAllUsers', async function (req, res, next) {
    try {
        res.json(await users.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error while getting AllUsers `, err.message);
        next(err);
    }
});

/* POST AddUser */
router.post('/addUser', async function (req, res, next) {
    try {
        res.json(await users.addNewUser(req.body));
    } catch (err) {
        console.error(`Error while adding new user `, err.message);
        next(err);
    }
});


/* POST Login */
router.post('/login', async function (req, res, next) {
    try {
        res.json(await users.login(req.body));
    } catch (err) {
        console.error(`Error while login user`, err.message);
        next(err);
    }
});

/* POST Add Tire */
router.post('/addTire', async function (req, res, next) {
    try {
        res.json(await tires.addNewTire(req.body));
    } catch (err) {
        console.error(`Error while adding new tire `, err.message);
        next(err);
    }
});

/* GET get All Tire */
router.get('/getAllTires', async function (req, res, next) {
    try {
        res.json(await tires.getAllTires());
    } catch (err) {
        console.error(`Error while getting tires `, err.message);
        next(err);
    }
});


/* POST get Tire By ID */
router.post('/getTireByID', async function (req, res, next) {
    try {
        res.json(await tires.getTireByID(req.body));
    } catch (err) {
        console.error(`Error while getting tires `, err.message);
        next(err);
    }
});

/* POST sell Tire By ID */
router.post('/sellTire', async function (req, res, next) {
    try {
        res.json(await tires.sellTire(req.body));
    } catch (err) {
        console.error(`Error while getting tires `, err.message);
        next(err);
    }
});



module.exports = router;