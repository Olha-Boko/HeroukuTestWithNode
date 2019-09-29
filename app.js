const express = require('express');
const path = require('path'); //path lets as navigate to the file sistem/folder

// Heroku assigns a port when it via the process (environmenr variables)
//localy this will run @ port 3000; remotaly it'll run werever heroku tells it to run
const port = process.env.PORT || 3000; // the || means "or"

const app =express();

//a forvard slash is the home route (same as index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'));
  //this builds localhost:3000/views/index.html
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/contact.html'));
})

app.get('/portfolio', (req, res) => {
  res.send('on the portfolio page! here!');
})

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});