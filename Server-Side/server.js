const express = require('express');
const app = express();
const port = 8080;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}).on("error", (error) => {
  error.console("Server not runniing: " + error)
});

const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'Client-Side', 'Public')));