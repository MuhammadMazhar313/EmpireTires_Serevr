
const db = require('./db');
const helper = require('../../helper');
const config = require('../../config');

const { success, error, validation, errorObj } = require("./BaseResponse");

// async function getAllSales() {
//     // const offset = helper.getOffset(page, config.listPerPage);
//     // var sqlQuery = "INSERT INTO `users`(`UserName`,`ContactNo`, `Address`) VALUES ('" + req.body.name + "','" + req.body.email + "','" + req.body.description + "')";
//     let response
//     try {

//         const rows = await db.query(
//             'SELECT * FROM `Sales`'
//         );
//         // const data = helper.emptyOrRows(rows);
//         // const meta = { page };
//         if (rows.length > 0) {
//             response = success("All sales listed successfully", { data: rows }, 200); //helper.emptyOrRows(rows)
//         } else {
//             response = success("No item found!", { data: rows }, 200); //helper.emptyOrRows(rows)

//         }


//     } catch (error) {
//         response = errorObj(" " + error, {}, 200)
//     }
//     finally {
//         return {
//             response
//         }
//     }
// }

async function getSaleByID(Sale) {
    // const offset = helper.getOffset(page, config.listPerPage);
    // var sqlQuery = "INSERT INTO `users`(`UserName`,`ContactNo`, `Address`) VALUES ('" + req.body.name + "','" + req.body.email + "','" + req.body.description + "')";
    let response
    try {

        const rows = await db.query(
            "SELECT * FROM `Sales` WHERE sale_id = '" + Sale.saleID + "'"
        );
        // const data = helper.emptyOrRows(rows);
        // const meta = { page };
        if (rows.length > 0) {
            response = success("Item retrieved successfully", { data: helper.emptyOrRows(rows) }, 200); //helper.emptyOrRows(rows)
        } else {
            response = success("No item found!", { data: helper.emptyOrRows(rows) }, 200); //helper.emptyOrRows(rows)

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

async function getSales(Sale) {
    // const offset = helper.getOffset(page, config.listPerPage);
    // var sqlQuery = "INSERT INTO `users`(`UserName`,`ContactNo`, `Address`) VALUES ('" + req.body.name + "','" + req.body.email + "','" + req.body.description + "')";
    let response
    // var salesDate
    var query
    try {

        var nowDate = new Date();
        var date = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();
        // TODO: 
        // Sale.salesDuration: map sales filter value to date and get data accordingly
        // all = 0
        // today = 1
        // weekly = 2
        // monthly = 3

        if (Sale.salesDuration == "0") {
            query = "SELECT * FROM `Sales`"
        } else if (Sale.salesDuration == "1") {
            query = "SELECT * FROM `Sales` WHERE sale_date = '" + date + "'"
        }
        // else if (Sale.salesDuration = "2") {
        //     query = "SELECT * FROM `Sales` WHERE sale_date > '" + PrevDate + "' and sale_date < '" + date + "'"
        // }

        const rows = await db.query(
            query
        );
        if (rows.length > 0) {
            response = success("Item retrieved successfully", { data: helper.emptyOrRows(rows) }, 200); //helper.emptyOrRows(rows)
        } else {
            response = success("No item found!", { data: helper.emptyOrRows(rows) }, 200); //helper.emptyOrRows(rows)

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


// async function sellTire(Tire) {
//     // const offset = helper.getOffset(page, config.listPerPage);
//     // var sqlQuery = "INSERT INTO `users`(`UserName`,`ContactNo`, `Address`) VALUES ('" + req.body.name + "','" + req.body.email + "','" + req.body.description + "')";
//     let response
//     try {
//         const rows = await db.query(
//             "INSERT INTO`Sales`(`tire_id`, `sale_amount`, `sale_date`, `buyer_detail`, `comments`, `is_active`) VALUES('" + Tire.tireID + "', '" + Tire.tireAmount + "', '" + Tire.saleDate + "', '" + Tire.buyerDetail + "', '" + Tire.comments + "', '1')"
//         );
//         // const data = helper.emptyOrRows(rows);
//         // const meta = { page };

//         const temp = await db.query(
//             "UPDATE`Tire` SET`status` = 'S' WHERE`tire_id` = '" + Tire.tireID + "'"
//         );
//         response = success("Tire sold successfully!", {}, 200);

//     } catch (error) {
//         response = errorObj(" " + error, {}, 200)
//     }
//     finally {
//         return {
//             response
//         }
//     }
// }



module.exports = {
    // getAllSales,
    getSaleByID,
    getSales
}