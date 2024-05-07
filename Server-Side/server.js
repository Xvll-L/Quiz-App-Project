/// use http://localhost:8080/dashboard.html to reach the port 8080 for the dashbaord to test the quiz


const express = require('express');
const app = express();
const port = 8080;
const db = require('./database');
///const open = require('open');

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  //open(`http://localhost:${port}`);
}).on("error", (error) => {
  error.console("Server not runniing: " + error)
});


// Index/ Login page data.
app.get('/Login', (req, res) => {
  const username = req.query.Username;
  const password = req.query.Password;
  console.log("######## Username " + username + " Password " + password);

  // check if the user exists
  const query = 'SELECT * FROM users WHERE userName = ? AND password = ?';
  db.query(query, [username, password], (error, results) => {
    if (error) {
      console.error('Error executing query: ' + error.stack);
      res.status(500).send('Internal Server Error');
    } else {
      if (results.length > 0) {
        // User found, login successful
        console.log('Login successful');
        res.send('Login successful');
        res.redirect('/dashboard.html');
      } else {
        // User not found 
        console.log('Invalid username or password');
        res.status(401).send('Invalid username or password');
      }
    }
  });
});

//Registration data
app.get('/newacc', (req,res) => {
  const username = req.query.Username
  const password = req.query.Password
  console.log("######## Username " + username + " Passwrod " + password)
})

///calls api for
const api = require('./api');
app.use('/api', api);

const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'Client-Side', 'Public')));

//app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname, '..', 'Client-Side', 'Public', 'dashboard.html'));
//});




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



