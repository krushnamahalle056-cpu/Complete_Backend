require("dotenv").config();                     // for use of .env file
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('server created');
});

app.get('/api', (req, res) => {
  // data of 6 students
  const data = [
    {
      id : 1,
      name: "Krushna Mahalle",
      email: " example@example.com"
    } ,
    {
      id : 2,
      name: "sahil Mahalle",
      email: " example@example1.com"
    },
    
    {
      id : 3,
      name: "hariom narwade",
      email: " example@example3.com"
    } ,
    
    {
      id : 4,
      name: "sarthak tayde",
      email: " example@example4.com"
    },
    
    {
      id : 5,
      name: "Sarthak patil",
      email: " example@example5.com"
    } ,
    
    {
      id : 6,
      name: "Vishal Mahalle",
      email: " example@example6.com"
    }
  ];
  res.send(data);
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || 4000}`);
});
