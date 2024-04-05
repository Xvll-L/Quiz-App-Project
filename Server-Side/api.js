const express = require('express');
const mysql = require('mysql');
const db = require('./database');

const app = express();

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get("/cityQ", (req, res) => {
  const sql = 'SELECT c.CountryName, ci.cityname FROM Country c JOIN City ci ON ci.cityID = c.CountryID ORDER BY RAND() LIMIT 4;';

  db.query(sql, (error, results) => {
    if (error) {
      console.error("Query error: " + error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log("Results:", results);
      const citydata = results.map(result => ({
        CountryName: result.CountryName,
        Cityname: result.cityname
      }));
      console.log("City Data:", citydata);
      res.json(citydata);
    }
  });
});


//test cityQ endpoint
/*app.get('/cityQ', (req, res) => {
  //test endpoint

  res.json({
    test:123234,
    test: "wrtwt"
  });
});*/

module.exports = app;