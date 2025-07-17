const http = require("http");

function requestListener(req, res) {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body>");
  if (req.url === "/") {
    res.write("<h1>Welcome to the Home Page</h1>");
    res.write("<p>This is the home page of our server.</p>");
    return res.end();
  } else if (req.url.toLowerCase() === "/about") {
    res.write("<h1>About Us</h1>");
    res.write("<p>This page contains information about us.</p>");
    return res.end();
  } else if (req.url.toLowerCase() === "/contact") {
    res.write("<h1>Contact Us</h1>");
    res.write("<p>You can contact us at contact@completecoding.com</p>");
    return res.end();
  } else if (req.url.toLowerCase() === "/products") {
    res.write("<h1>Our Products</h1>");
    res.write("<p>Here is a list of our products:</p>");
    res.write("<ul>");
    res.write("<li>Product 1</li>");
    res.write("<li>Product 2</li>");
    res.write("<li>Product 3</li>");
    res.write("</ul>");
    return res.end();
  } else {
    res.write("<p>Feel free to explore our products.</p>");
    res.write("<p>Thank you for visiting our server!</p>");
    return res.end();
  }

  res.write("</body>");
  res.write("</html>");

  // process.exit();
}

const server = http.createServer(requestListener);
const PORT = 3400;
server.listen(PORT, () => {
  console.log(`Server listen on a port ${PORT}`);
});
