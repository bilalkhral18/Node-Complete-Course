const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  const url = req.url.toLowerCase();
  if (url === "/" || url === "/home") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Myntra App</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Home Page</h1>");
    res.write("<ol type='A'>");
    res.write("<li><a href='/home'>Home</a></li>");
    res.write("<li><a href='/men'>Men</a></li>");
    res.write("<li><a href='/women'>Women</a></li>");
    res.write("<li><a href='/kids'>Kids</a></li>");
    res.write("<li><a href='/cart'>Cart</a></li>");
    res.write("</ol>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/men") {
    res.write("<h1>Welcome to the men's section</h1>");
    res.write("<a href='/'>Go back to home</a>");
    return res.end();
  } else if (url === "/women") {
    res.write("<h1>Welcome to the women's section</h1>");
    res.write("<a href='/'>Go back to home</a>");
    return res.end();
  } else if (url === "/kids") {
    res.write("<h1>Welcome to the kids' section</h1>");
    res.write("<a href='/'>Go back to home</a>");
    return res.end();
  } else if (url === "/cart") {
    res.write("<h1>Welcome to the cart</h1>");
    res.write("<a href='/'>Go back to home</a>");
    return res.end();
  } else {
    res.write("<h1>404 Not Found</h1>");
    res.write("<a href='/'>Go back to home</a>");
    return res.end();
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
