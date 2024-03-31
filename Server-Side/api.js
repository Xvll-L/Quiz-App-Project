const mysql = require('mysql');
const db = require('./database');



 //query to text if the myserver is working and can put data.

const sql =' select CountryName, cityname from Country  INNER JOIN City on City.cityID  = Country.CountryID;'
app.get("/cityQ",(rep,res) => 


db.query(sql, (error,results) => {
  if(error){
      console.error("query error" + error)
  }
  const text = results;
  console.log(results);
  res.json(results)
}));