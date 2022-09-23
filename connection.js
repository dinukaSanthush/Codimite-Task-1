const mysql = require('mysql');

var connection = mysql.createConnection({


    port:3306,
    host:"localhost",
    user:"root",
    password:"123",
    database:"TODO"
})

connection.connect((err)=>{

    if(!err)
    {
        console.log("Connected");
    }
    else 
    console.log(err);

})


module.exports = connection;