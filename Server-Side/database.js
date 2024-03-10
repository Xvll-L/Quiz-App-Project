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
  const sql =' select CountryName, cityname from Country  INNER JOIN City on City.cityID  = Country.CountryID;'

  db.query(sql, (error,results) => {
    if(error){
        console.error("query error" + error)
    }
    const text = results[5]
    console.log(text.cityname)
  });
// send sql server to api
  module.exports = db;