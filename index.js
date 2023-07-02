// ES6 syntax
// importing packages
// import express from 'express';
// const cors = require('cors');

const express = require('express');
const router = require('./routes/hello.js');
const app = express();
// const programmingLanguagesRouter = require('./routes/services/users');

// middlewares
// app.use(cors())
app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);
// app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Mzar server live")
})

// adding routes
// app.use('/hello', router);
app.get('/get', router);
app.post('/post', router);
app.put('/put', router);
app.delete('/delete', router);

// user
app.get("/getAllUsers", router);
app.post("/addUser", router);
app.post("/login", router);

// tire
app.get("/getAllTires", router);
app.post("/addTire", router);
app.post("/sellTire", router);
app.post("/getTireByID", router);
app.post("/getTireByCode", router);

// sale
app.post("/getSales", router);


/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

// port test
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
