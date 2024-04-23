const express = require('express');
const app = express();
const port = 8080;
const db = require('./database');

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}).on("error", (error) => {
  error.console("Server not runniing: " + error)
});

// Index/ Login page data.
app.get('/Login', (req,res) => {
  const username = req.query.Username
  const password = req.query.Password
  console.log("######## Username " + username + " Passwrod " + password)
})

//Registration data
app.get('/newacc', (req,res) => {
  const username = req.query.Username
  const password = req.query.Password
  console.log("######## Username " + username + " Passwrod " + password)
})

///calls api from staitic page
const api = require('./api');
app.use('/api', api);


//api test
/*app.get("/cityQ", (req, res) => {
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
});*/



const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'Client-Side', 'Public')));