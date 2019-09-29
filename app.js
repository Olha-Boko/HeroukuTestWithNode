const express = require('express');
// Heroku assigns a port when it via the process (environmenr variables)
//localy this will run @ port 3000; remotaly it'll run werever heroku tells it to run
const port = process.env.PORT || 3000; // the || means "or"

const app =express();

app.get('/', (req, res) => {
  res.send('hello world! here!');
})

app.get('/contact', (req, res) => {
  res.send('on the contact page! here!');
})

app.get('/portfolio', (req, res) => {
  res.send('on the portfolio page! here!');
})

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});