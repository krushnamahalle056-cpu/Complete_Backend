require("dotenv").config();                     // for use of .env file
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('server created');
});

app.get('/data', (req, res) => {
  // data of 6 students
  const data = [
    
  ];
  res.send(data);
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || 4000}`);
});
