const db = require('./db');
const helper = require('../../helper');
const config = require('../../config');
// Import the responseApi.js

const { success, error, validation, errorObj } = require("./BaseResponse");


async function addNewTool(Tool) {
    console.log("Tool object:", Tool);
    // var sqlQuery = "INSERT INTO `users`(`UserName`,`ContactNo`, `Address`) VALUES ('" + req.body.name + "','" + req.body.email + "','" + req.body.description + "')";
    let response
    try {
        const rows = await db.query(
            "INSERT INTO `Tool`(`name`, `description`, `catagory`, `model`, `pic`, `availability_status`) VALUES ('" + Tool.name + "','" + Tool.description + "','" + Tool.catagory + "','" + Tool.model + "','" + Tool.pic + "','Available')"
        );
        // const data = helper.emptyOrRows(rows);
        // const meta = { page };

        response = success("'" + Tool.name + "' added successfully", {}, 200);

    } catch (error) {
        response = errorObj(" " + error, {}, 200)
    }
    finally {
        return {
            response
        }
    }

}


async function getAllTools() {
    // const offset = helper.getOffset(page, config.listPerPage);
    // var sqlQuery = "INSERT INTO `users`(`UserName`,`ContactNo`, `Address`) VALUES ('" + req.body.name + "','" + req.body.email + "','" + req.body.description + "')";
    let response
    try {

        const rows = await db.query(
            'SELECT * FROM Tool'
        );
        // const data = helper.emptyOrRows(rows);
        // const meta = { page };
        if (rows.length > 0) {
            response = success("All tools listed successfully", { data: rows }, 200); //helper.emptyOrRows(rows)
        } else {
            response = success("No tool found!", { data: rows }, 200); //helper.emptyOrRows(rows)

        }


    } catch (error) {
        response = errorObj(" " + error, {}, 200)
    }
    finally {
        return {
            response
        }
    }
}


async function getToolByID(Tool) {
    // const offset = helper.getOffset(page, config.listPerPage);
    // var sqlQuery = "INSERT INTO `users`(`UserName`,`ContactNo`, `Address`) VALUES ('" + req.body.name + "','" + req.body.email + "','" + req.body.description + "')";
    let response
    try {

        const rows = await db.query(
            "SELECT * FROM `Tool` WHERE tool_id = '" + Tool.id + "'"
        );
        // const data = helper.emptyOrRows(rows);
        // const meta = { page };
        if (rows.length > 0) {
            response = success("Tool retrieved successfully", { data: helper.emptyOrRows(rows) }, 200); //helper.emptyOrRows(rows)
        } else {
            response = success("No tool found!", { data: helper.emptyOrRows(rows) }, 200); //helper.emptyOrRows(rows)

        }

    } catch (error) {
        response = errorObj(" " + error, {}, 200)
    }
    finally {
        return {
            response
        }
    }
}

module.exports = {
    addNewTool,
    getAllTools,
    getToolByID
}