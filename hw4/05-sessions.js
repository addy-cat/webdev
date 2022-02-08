const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5000;

// Add your code here

// Use the express-session module
app.use(session({secret: 'supersecret', cookie: {maxAge: 60000 }}));

app.get('/favicon.ico', (req,res) => {
  res.status(404);
  res.send('Not Found');
});
app.get('*', (req, res) => {
  // Add your code here
  res.status(200);
  let res_string = `<p>Currently on route: ${req.url}</p>`;
  if (!req.session.prev){ 
    req.session.prev = [];
    res.send(`${res_string}\n<p>Welcome to http://localhost:5000${req.url}!`);
  } else {
    res_string += `<p>Previously visited:</p>`;
    req.session.prev.forEach(element => {
      res_string += `<p>${element}</p>`
    });
    res.send(res_string);
  }
  req.session.prev.push(req.url);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
