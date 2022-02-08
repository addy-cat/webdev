const http = require('http');
const port = process.env.PORT || 5000;

// http://localhost:5000/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5000/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5000/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5000/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// http://localhost:5000/check-cookies should return 'yes' / 'no' in plain text depending on whether the browser has the 'hello' cookie

// for other routes, such as http://localhost:5000/other, this exercise should return a status code 404 with '404 - page not found' in html format

const server = http.createServer((req, res) => {
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

  if (req.url === '/') {
    let routeResults = getRoutes();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Exercise 01</h1>`);
    res.write(`<ul> ${routeResults} </ul>`);
    res.end();
  }

  // Add your code here
  else if (req.url === "/welcome") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<p> Welcome!! </p>");
    res.end();
  }

  else if (req.url === "/redirect") {
    res.writeHead(302, { "Content-Type": "text/html", "Location": "/redirected" });
    res.write("<p> You are being redirected.. </p>");
    res.end();
  }

  else if (req.url === "/redirected") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<p> There you are!! </p>");
    res.end();
  }

  else if (req.url === "/cache") {
    res.writeHead(304, {"Cache-Control": `${60*60*24}`});
    res.write("This resource was cached.");
    res.end();
  }

  else if (req.url === "/cookie") {
    res.writeHead(200, {"Set-Cookie": "hello=world"});
    res.write("cookies.... yummm");
    res.end()
  }

  else if (req.url === "/check-cookies") {
    if (req.headers['cookie'] === 'hello=world')
      res.write('<p>GIMMME ALL DEM COOKIES</p>');
    else
      res.write("<p>GET ME SOME FREAKING COOKIES</p>");
    res.end()
  }

  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("404...");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
