const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'quiz'
  });
// connect to mysql server
  db.connect((err) => {
    if (err){
        console.err("conntection error: " + err)
    }
    console.log("sql conection up")
  });

//query to text if the myserver is working and can put data.
 
// send sql server to api
  module.exports = db;