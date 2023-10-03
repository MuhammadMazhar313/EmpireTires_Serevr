//importing packages
const express = require('express');
const router = express.Router();
const users = require('../routes/services/users');
const tires = require('../routes/services/tires');
const sales = require('../routes/services/sales');
const tools = require('./services/tools');

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
        res.json(await users.getAllUsers(req.query.page));
    } catch (err) {
        console.error(`Error while getting AllUsers`, err.message);
        next(err);
    }
});

/* POST AddUser */
router.post('/addUser', async function (req, res, next) {
    try {
        res.json(await users.addNewUser(req.body));
    } catch (err) {
        console.error(`Error while adding new user`, err.message);
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
        console.error(`Error while adding new tire`, err.message);
        next(err);
    }
});

/* GET get All Tire */
router.get('/getAllTires', async function (req, res, next) {
    try {
        res.json(await tires.getAllTires());
    } catch (err) {
        console.error(`Error while getting tires`, err.message);
        next(err);
    }
});


/* POST get Tire By ID */
router.post('/getTireByID', async function (req, res, next) {
    try {
        res.json(await tires.getTireByID(req.body));
    } catch (err) {
        console.error(`Error while getting tire`, err.message);
        next(err);
    }
});

/* POST get Tire By Code */
router.post('/getTireByCode', async function (req, res, next) {
    try {
        res.json(await tires.getTireByCode(req.body));
    } catch (err) {
        console.error(`Error while getting tire`, err.message);
        next(err);
    }
});

/* POST sell Tire By ID */
router.post('/sellTire', async function (req, res, next) {
    try {
        res.json(await tires.sellTire(req.body));
    } catch (err) {
        console.error(`Error while selling tire`, err.message);
        next(err);
    }
});


/* POST get Sales By Duration */
router.post('/getSales', async function (req, res, next) {
    try {
        res.json(await sales.getSales(req.body));
    } catch (err) {
        console.error(`Error while getting sales`, err.message);
        next(err);
    }
});

/* GET get All Tools */
router.get('/getAllTools', async function (req, res, next) {
    try {
        res.json(await tools.getAllTools());
    } catch (err) {
        console.error(`Error while getting tools`, err.message);
        next(err);
    }
});

/* POST Add new Tool */
router.post('/addNewTool', async function (req, res, next) {
    try {
        res.json(await tools.addNewTool(req.body));
    } catch (err) {
        console.error(`Error while adding new tool`, err.message);
        next(err);
    }
});


/* POST get tool By ID*/
router.post('/getToolByID', async function (req, res, next) {
    try {
        res.json(await tools.getToolByID(req.body));
    } catch (err) {
        console.error(`Error while getting tool`, err.message);
        next(err);
    }
});


module.exports = router;