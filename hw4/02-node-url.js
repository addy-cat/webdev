const http = require('http');

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  const routes = [
    '/attributes?hello=world&lorem=ipsum',
    '/items?first=1&second=2&third=3&fourth=4',
    '/characters?spongebob=squarepants&patrick=star&sandy=cheeks',
  ];

  // use the URL interface to work with URLs
  // source: https://developer.mozilla.org/en-US/docs/Web/API/URL
  let url = new URL(req.url, `http://${req.headers.host}`);

  let getRoutes = () => {
    let result = '';

    routes.forEach(
      (elem) => (result += `<li><a href="${elem}">${elem}</a></li>`)
    );

    return result;
  };

  if (req.url === '/') {
    let routeResults = getRoutes();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Exercise 02</h1>`);

    res.write(`<ul> ${routeResults} </ul>`);
  }

  // Add your code here
  if(req.url === '/attributes?hello=world&lorem=ipsum') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let params = req.url.split("?")[1];
    let param_list = params.split("&");
    res.write('<table style="border:1px solid black;">')
    param_list.forEach((param) => {
      let [name,value] = param.split('=');
      res.write('<tr style="border:1px solid black;">');
      res.write(`<td style="border:1px solid black;">${name}</td>`);
      res.write(`<td style="border:1px solid black;">${value}</td>`)
      res.write(`</tr>`)
    })
    res.write('</table>');
    res.end();
  }

  if(req.url === '/attributes?hello=world&lorem=ipsum') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let params = req.url.split("?")[1];
    let param_list = params.split("&");
    res.write('<table style="border:1px solid black;">')
    param_list.forEach((param) => {
      let [name,value] = param.split('=');
      res.write('<tr style="border:1px solid black;">');
      res.write(`<td style="border:1px solid black;">${name}</td>`);
      res.write(`<td style="border:1px solid black;">${value}</td>`)
      res.write(`</tr>`)
    })
    res.write('</table>');
    res.end();
  }

  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
