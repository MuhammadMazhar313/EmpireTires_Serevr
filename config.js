
const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: "db4free.net",
        user: "mmazhar",
        password: "Temp/1234",
        database: "empire_tires",
    },
    listPerPage: 10,
};
module.exports = config;


//        connectionLimit: 10,
// acquireTimeout: 10000,