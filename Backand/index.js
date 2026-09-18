require("dotenv").config();                     // for use of .env file
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('HI Krushna Mahalle');
});

app.get('/netflix',(req, res) =>{
    res.send("<h2>Welcome to Netflix</h2>");
})

app.get('/login',(req, res) =>{
    res.send(`<h1>Welcome to Login Page</h1>`);
})

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || 4000}`);
});
