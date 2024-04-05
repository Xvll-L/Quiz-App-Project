const express = require('express');
const app = express();
const port = 8080;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}).on("error", (error) => {
  error.console("Server not runniing: " + error)
});

///calls api from staitic page
const api = require('./api');
app.use('/api', api);

const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'Client-Side', 'Public')));