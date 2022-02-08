const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
const port = process.env.PORT || 5000;

// Add your code here
app.use(express.static('public'));
app.use(bodyParser.urlencoded());

app.post('/submit', (req, res) => {
  // Add your code here
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res_string = ''
  Object.keys(req.body).forEach((key) => {
    if(key != 'checkbox') res_string += `<p>${key}: ${req.body[key]}</p>`;
  })
  if(!("checkbox" in req.body)) res_string += '<p>Newsletter: No, thank you</p>';
  else res_string += '<p>Newsletter: Yes, sign me up for the newsletter.</p>'
  res.send(res_string);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
