const db = require('./db');
const helper = require('../../helper');
const config = require('../../config');

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        'SELECT * From users'
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return {
        data,
        meta
    }
}

async function addNewUser(User) {
    // const offset = helper.getOffset(page, config.listPerPage);
    // var sqlQuery = "INSERT INTO `users`(`UserName`,`ContactNo`, `Address`) VALUES ('" + req.body.name + "','" + req.body.email + "','" + req.body.description + "')";
    console.log("user object:", User);
    const rows = await db.query(
        "INSERT INTO `users`(`UserName`,`ContactNo`, `Address`) VALUES ('" + User.userName + "','" + User.contactNo + "','" + User.address + "')"
    );
    const data = helper.emptyOrRows(rows);
    // const meta = { page };

    return {
        data
        // ,
        // meta
    }
}



module.exports = {
    getMultiple,
    addNewUser
}





// `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    // FROM programming_languages LIMIT ${ offset },${ config.listPerPage } `