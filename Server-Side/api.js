const express = require('express');
const mysql = require('mysql');
const db = require('./database');

const app = express();

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get("/cityQ", (req, res) => {
  const sql = 'SELECT c.CountryName, ci.cityname FROM Country c JOIN City ci ON ci.cityID = c.CountryID ORDER BY RAND() LIMIT 4; ';

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
      console.log("###########    City Data: send   ", citydata, "    ###########");
      res.json(citydata);
    }
  });
});


app.get('/flagQ', (req, res) => {
  const sql = 'SELECT * FROM Flag ORDER BY RAND() LIMIT 4;'; 

  db.query(sql, (error, results) => {
    if (error) {
      console.error("Query error: " + error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log("Results:", results);
      const flagData = results.map(result => ({
        FlagID: result.FlagID,
        FlagName: result.flagName,
        flagImage: result.flagImage
      }));
      console.log("Flag Data:", flagData);
      res.json(flagData);
    }
  });
});


app.get('/countryQ', (req, res) => {
  const sql = `
    SELECT c.CountryName, ci.CountryImage
    FROM Country c
    JOIN countryImage ci ON ci.CountryID = c.CountryID
    ORDER BY RAND()
    LIMIT 4;
  `;
  db.query(sql, (error, results) => {
    if (error) {
      console.error("Query error: " + error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log("Results:", results);
      const countryData = results.map(result => ({
        CountryName: result.CountryName,
        CountryImage: result.CountryImage
      }));
      console.log("Country Data:", countryData);
      res.json(countryData);
    }
  });
});

//test cityQ, flagq and countryQ.html endpoint
/*app.get('/flagQ', (req, res) => {
  //test endpoint

  res.json({
    test:123234,
    test: "wrtwt"
  });
});*/



module.exports = app;