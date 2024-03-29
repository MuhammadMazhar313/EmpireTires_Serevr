const db = require('./db');
const helper = require('../../helper');
const config = require('../../config');
const { success, error, validation, errorObj } = require("./BaseResponse");


async function getAllUsers(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        'SELECT * From users'
    );
    // const data = helper.emptyOrRows(rows);
    const meta = { page };
    let response = success("OK", { data: helper.emptyOrRows(rows) }, 200);

    return {
        response
    }
}

async function addNewUser(User) {
    console.log("user object:", User);
    const rows = await db.query(
        "INSERT INTO `users`(`UserName`, `password`, `ContactNo`, `Address`) VALUES ('" + User.userName + "','" + User.password + "','" + User.contactNo + "','" + User.address + "')"
    );

    let response = success("User Added Successfully.", { user: helper.emptyOrRows(rows) }, 200);

    return {
        response
    }
}

async function login(User) {
    console.log("user object:", User);
    let response
    try {
        const rows = await db.query(
            "SELECT * FROM `users` WHERE UserName = '" + User.userName + "' AND password = '" + User.password + "'"
        );

        if (rows.length > 0) {
            console.log(rows)
            response = success("User LoggedIn successfully", { user: helper.emptyOrRows(rows) }, 200)
        } else {
            response = errorObj("Incorrect UserName or password!", {}, 200)
        }
    } catch (error) {
        response = errorObj(" Something went wrong, Please enter correct user name or password", {}, 200)
        // return 
    }

    finally {
        return {
            response
        }
    }

}

module.exports = {
    getAllUsers,
    addNewUser,
    login
}