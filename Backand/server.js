require("dotenv").config();                     // for use of .env file
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('server created');
});



app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || 4000}`);
});
