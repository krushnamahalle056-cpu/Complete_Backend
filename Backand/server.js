require("dotenv").config();                     // for use of .env file
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('server created');
});

app.get('/data', (req, res) => {
  // data of 6 students
  const Jokes = [
    {
        id: 1,
        title: "Programming Joke",
        content: "Why do programmers prefer dark mode? Because light attracts bugs!"
    },
    {    id: 2,
        title: "JavaScript Joke",
        content: "Why did JavaScript developer go broke? Because he used up all his cache!"
    },
    {
        id: 3,
        title: "Developer Joke",
        content: "A programmer's favorite place? The terminal!"
    },
    {
        id: 4,
        title: "Computer Joke",
        content: "Why was the computer cold? It left its Windows open!"
    },
    {
        id: 5,
        title: "Coding Joke",
        content: "There are 10 types of people: those who understand binary and those who don't."
    }
  ];
  res.send(Jokes);
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || 4000}`);
});
