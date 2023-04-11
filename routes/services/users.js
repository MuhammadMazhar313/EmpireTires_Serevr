const db = require('./db');
const helper = require('../../helper');
const config = require('../../config');
// Import the responseApi.js
const { success, error, validation } = require("./BaseResponse");

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        'SELECT * From users'
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };
    response = 200

    return {
        response,
        data,
        meta
    }
}

async function addNewUser(User) {
    // const offset = helper.getOffset(page, config.listPerPage);
    // var sqlQuery = "INSERT INTO `users`(`UserName`,`ContactNo`, `Address`) VALUES ('" + req.body.name + "','" + req.body.email + "','" + req.body.description + "')";
    console.log("user object:", User);
    var response
    const rows = await db.query(
        "INSERT INTO `users`(`UserName`,`ContactNo`, `Address`) VALUES ('" + User.userName + "','" + User.contactNo + "','" + User.address + "')"
    );
    const data = helper.emptyOrRows(rows);
    // const meta = { page };
    response = 200

    return {
        response,
        data
        // ,
        // meta
    }
}

//"INSERT INTO `users`(`UserName`,`ContactNo`, `Address`) VALUES ('" + User.userName + "','" + User.contactNo + "','" + User.address + "')"

async function login(User) {
    // const offset = helper.getOffset(page, config.listPerPage);
    // var sqlQuery = "INSERT INTO `users`(`UserName`,`ContactNo`, `Address`) VALUES ('" + req.body.name + "','" + req.body.email + "','" + req.body.description + "')";
    console.log("user object:", User);
    var response
    const rows = await db.query(
        "SELECT * FROM `users` WHERE UserName = '" + User.userName + "' AND password = '" + User.password + "'"
    );
    const data = helper.emptyOrRows(rows);
    if (rows.length > 0) {
        console.log(rows)
        response = 200
    }
    // const meta = { page };

    return {
        response,
        data
        // ,
        // meta
    }
}


module.exports = {
    getMultiple,
    addNewUser,
    login
}





// `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    // FROM programming_languages LIMIT ${ offset },${ config.listPerPage } `