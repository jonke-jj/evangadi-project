const mysql2 = require('mysql2');

const dbConnection = mysql2.createPool({
    user: process.env.USER,
    database: process.env.DATABASE,
    host: "193.203.166.18",
    password: process.env.PASSWORD,
    port:3306,
    connectionLimit: 10
})
// console.log(process.env.DATABASE)
// dbConnection.execute("select 'connected' ", (err, result) => {
//     if (err) {
//         console.log(err.message)
//     } else {
//         console.log(result)
//     }
// })

module.exports = dbConnection.promise()