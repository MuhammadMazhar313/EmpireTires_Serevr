const db = require('./db');
const helper = require('../../helper');
const config = require('../../config');
// Import the responseApi.js
const { success, error, validation, errorObj } = require("./BaseResponse");


async function addNewTire(Tire) {
    console.log("Tire object:", Tire);
    // TODO : generate barcode
    let response
    try {
        const rows = await db.query(
            "INSERT INTO`Tire`(`tire_code`, `tire_name`, `description`, `price`, `catagory`, `size`, `model`, `purchase_date`, `pic`, `supplier_detail`, `status`) VALUES('" + Tire.tireCode + "', '" + Tire.tireName + "','" + Tire.description + "', '" + Tire.price + "', '" + Tire.catagory + "', '" + Tire.size + "', '" + Tire.model + "', '" + Tire.purchase_date + "', '" + Tire.pic + "', '" + Tire.supplier_detail + "', '" + Tire.status + "')"
        );
        // const data = helper.emptyOrRows(rows);
        // const meta = { page };

        response = success("Tire added successfully", {}, 200);

    } catch (error) {
        response = errorObj(" " + error, {}, 200)
        // return 
    }
    finally {
        return {
            response
        }
    }


}

async function getAllTires() {
    // const offset = helper.getOffset(page, config.listPerPage);
    // var sqlQuery = "INSERT INTO `users`(`UserName`,`ContactNo`, `Address`) VALUES ('" + req.body.name + "','" + req.body.email + "','" + req.body.description + "')";
    // console.log("Tire object:", Tire);
    let response
    try {

        const rows = await db.query(
            'SELECT * From Tire'
        );
        // const data = helper.emptyOrRows(rows);
        // const meta = { page };
        if (rows.length > 0) {
            response = success("All tires listed successfully", { data: rows }, 200); //helper.emptyOrRows(rows)
        } else {
            response = success("No tire found!", { data: rows }, 200); //helper.emptyOrRows(rows)

        }


    } catch (error) {
        response = errorObj(" " + error, {}, 200)
        // return 
    }
    finally {
        return {
            response
        }
    }
}



async function getTireByID(Tire) {
    // const offset = helper.getOffset(page, config.listPerPage);
    // var sqlQuery = "INSERT INTO `users`(`UserName`,`ContactNo`, `Address`) VALUES ('" + req.body.name + "','" + req.body.email + "','" + req.body.description + "')";
    // console.log("Tire object:", Tire);
    let response
    try {

        const rows = await db.query(
            "SELECT * FROM `Tire` WHERE tire_id = '" + Tire.tireID + "'"
        );
        // const data = helper.emptyOrRows(rows);
        // const meta = { page };
        if (rows.length > 0) {
            response = success("Tire retrieved successfully", { data: helper.emptyOrRows(rows) }, 200); //helper.emptyOrRows(rows)
        } else {
            response = success("No tire found", { data: helper.emptyOrRows(rows) }, 200); //helper.emptyOrRows(rows)

        }

    } catch (error) {
        response = errorObj(" " + error, {}, 200)
        // return 
    }
    finally {
        return {
            response
        }
    }
}

async function getTireByCode(Tire) {
    // const offset = helper.getOffset(page, config.listPerPage);
    // var sqlQuery = "INSERT INTO `users`(`UserName`,`ContactNo`, `Address`) VALUES ('" + req.body.name + "','" + req.body.email + "','" + req.body.description + "')";
    // console.log("Tire object:", Tire);
    let response
    try {

        const rows = await db.query(
            "SELECT * FROM `Tire` WHERE tire_code = '" + Tire.tireCode + "'"
        );
        // const data = helper.emptyOrRows(rows);
        // const meta = { page };
        if (rows.length > 0) {
            response = success("Tire retrieved successfully(using code)", { data: helper.emptyOrRows(rows) }, 200); //helper.emptyOrRows(rows)
        } else {
            response = success("No tire found", { data: helper.emptyOrRows(rows) }, 200); //helper.emptyOrRows(rows)
        }

    } catch (error) {
        response = errorObj(" " + error, {}, 200)
        // return 
    }
    finally {
        return {
            response
        }
    }
}

async function sellTire(Tire) {
    // const offset = helper.getOffset(page, config.listPerPage);
    // var sqlQuery = "INSERT INTO `users`(`UserName`,`ContactNo`, `Address`) VALUES ('" + req.body.name + "','" + req.body.email + "','" + req.body.description + "')";
    // console.log("Tire object:", Tire);
    let response
    try {
        const rows = await db.query(
            "INSERT INTO`Sales`(`tire_id`, `sale_amount`, `sale_date`, `buyer_detail`, `comments`, `is_active`) VALUES('" + Tire.tireID + "', '" + Tire.tireAmount + "', '" + Tire.saleDate + "', '" + Tire.buyerDetail + "', '" + Tire.comments + "', '1')"
        );
        // const data = helper.emptyOrRows(rows);
        // const meta = { page };

        const temp = await db.query(
            "UPDATE`Tire` SET`status` = 'S' WHERE`tire_id` = '" + Tire.tireID + "'"
        );
        response = success("Tire sold successfully", {}, 200); //helper.emptyOrRows(rows)

    } catch (error) {
        response = errorObj(" " + error, {}, 200)
        // return 
    }
    finally {
        return {
            response
        }
    }
}



module.exports = {
    addNewTire,
    getAllTires,
    getTireByID,
    sellTire,
    getTireByCode
}