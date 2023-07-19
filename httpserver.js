const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url == "/") {
    res.statusCode = 200;
    res.end("<h1>THE HTML PAGE</h1><ul><li>Item1</li><li>Item 2</li></ul>");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>Random Page</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>Hey dumb bitch</h1><h2>Page not found</h2>");
  }
});

server.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
