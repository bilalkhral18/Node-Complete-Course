const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Myntra</title></head>");
  res.write("<body>");

  if (req.url === "/" && req.method === "GET") {
    res.write(`<header><nav>
      <h1>Welcome to Myntra</h1>
      <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/men">Men</a></li>
          <li><a href="/women">Women</a></li>
          <li><a href="/kids">Kids</a></li>
          <li><a href="/cart">Cart</a></li>
      </ul>
    </nav></header>`);
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLocaleLowerCase() === "/men") {
    res.write("<h1>Men's Section</h1>");
    res.write('<a href="/">Go to Home</a>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLocaleLowerCase() === "/women") {
    res.write("<h1>Women's Section</h1>");
    res.write('<a href="/">Go to Home</a>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLocaleLowerCase() === "/kids") {
    res.write("<h1>Kids' Section</h1>");
    res.write('<a href="/">Go to Home</a>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLocaleLowerCase() === "/cart") {
    res.write("<h1>Your Cart</h1>");
    res.write('<a href="/">Go to Home</a>');

    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else {
    res.statusCode = 404;
    res.write("<h1>Page Not Found</h1>");
    res.write('<a href="/">Go to Home</a>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
