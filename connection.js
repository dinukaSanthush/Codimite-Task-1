//import modules
const mysql = require('mysql');

// mysql connection configurations

var connection = mysql.createConnection({
    port:3306,
    host:"localhost",
    user:"root",
    password:"123",
    database:"TODO"
})

// if connection not established

connection.connect((err)=>{

    if(!err)
    {
        console.log("Connected");
    }
    else 
    console.log(err);

})

// export connection configurations
module.exports = connection;