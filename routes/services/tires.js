const db = require('./db');
const helper = require('../../helper');
const config = require('../../config');
// Import the responseApi.js
const { success, error, validation } = require("./BaseResponse");


async function addNewTire(Tire) {
    // const offset = helper.getOffset(page, config.listPerPage);
    // var sqlQuery = "INSERT INTO `users`(`UserName`,`ContactNo`, `Address`) VALUES ('" + req.body.name + "','" + req.body.email + "','" + req.body.description + "')";
    console.log("Tire object:", Tire);
    const rows = await db.query(
        // "INSERT INTO `users`(`UserName`,`ContactNo`, `Address`) VALUES ('" + User.userName + "','" + User.contactNo + "','" + User.address + "')"
        "INSERT INTO`Tire`(`tire_code`, `tire_name`, `description`, `price`, `catagory`, `size`, `model`, `purchase_date`, `pic`, `supplier_detail`, `status`) VALUES('" + Tire.tireCode + "', '" + Tire.tireName + "','" + Tire.description + "', '" + Tire.price + "', '" + Tire.catagory + "', '" + Tire.size + "', '" + Tire.model + "', '" + Tire.purchase_date + "', '" + Tire.pic + "', '" + Tire.supplier_detail + "', '" + Tire.status + "')"
    );
    // const data = helper.emptyOrRows(rows);
    // const meta = { page };

    let response = success("Tire Added Successfully", { data: "" }, 200);

    return {
        response
    }
}



module.exports = {
    addNewTire
}