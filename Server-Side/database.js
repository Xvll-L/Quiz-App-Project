const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'quiz'
  });
// connect to mysql server
  db.connect((error) => {
    if (error){
        console.error("conntection error: " + error)
    }
    console.log("sql conection up")
  });

//query to text if the myserver is working and can put data.
const sql =' select CountryName, cityname from Country  INNER JOIN City on City.cityID  = Country.CountryID;'

/*db.query(sql, (error,results) => {
  if(error){
      console.error("query error" + error)
  }
  const text = results;
  console.log(results);
});*/
// send sql server to api
  module.exports = db;