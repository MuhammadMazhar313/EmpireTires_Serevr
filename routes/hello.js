//importing packages
const express = require('express');
const router = express.Router();
const users = require('../routes/services/users');
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

module.exports = router;