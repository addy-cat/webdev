const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// http://localhost:5000/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5000/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5000/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5000/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// for other routes, such as http://localhost:5000/other, this exercise should return a status code 404 with '404 - page not found' in html format

const routes = [
  'welcome',
  'redirect',
  'redirected',
  'cache',
  'cookie',
  'check-cookies',
  'other',
];

let getRoutes = () => {
  let result = '';

  routes.forEach(
    (elem) => (result += `<li><a href="/${elem}">${elem}</a></li>`)
  );

  return result;
};

app.get('/', (req, res) => {
  let routeResults = getRoutes();

  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.write(`<h1>Exercise 04</h1>`);
  res.write(`<ul> ${routeResults} </ul>`);
});

app.get('/welcome', (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.send("<p> Welcome!! </p>");
});

app.get('/redirect', (req, res) => {
  res.status(302);
  res.set({ "Content-Type": "text/html", "Location": "/redirected" });
  res.send("<p> You are being redirected.. </p>");
})

app.get('/redirected', (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.send("<p> There you are!! </p>");
})

app.get('/cache', (req, res) => {
    res.status(304);
    res.set({"Cache-Control": `max-age=${60*60*24}`});
    res.send("This resource was cached.");
})

app.get('/cookie', (req, res) => {
  res.status(200);
  res.set({"Set-Cookie": "hello=world"});
  res.send("cookies.... yummm");
})

app.get('/check-cookies', (req, res) => {
    if (req.headers['cookie'] === 'hello=world')
      res.send('<p>GIMMME ALL DEM COOKIES</p>');
    else
      res.send("<p>GET ME SOME FREAKING COOKIES</p>");
})

app.get('*', (req, res) => {
  res.writeHead(404, { "Content-Type": "text/html" });
  res.write("404...");
  res.end();
})

// Add your code here

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
