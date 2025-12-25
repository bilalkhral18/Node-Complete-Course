const http = require("http");

const SERVER = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  let url = req.url.toLowerCase();
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>Myntra App</title></head>");
  res.write("<body>");
  if (url === "/" || url === "/home") {
    res.write(`<header>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/men">Men</a></li>
          <li><a href="/women">Women</a></li>
          <li><a href="/kids">Kids</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
    </header>`);
  } else if (url === "/men") {
    res.write("<h2>Wellcome to the Mens Section</h2>");
  } else if (url === "/women") {
    res.write("<h2>Wellcome to the Women Section</h2>");
  } else if (url === "/kids") {
    res.write("<h2>Wellcome to the Kids Section</h2>");
  } else if (url === "/cart") {
    res.write("<h2>Wellcome to the Cart Section</h2>");
  } else {
    res.write("<h2>Error 404</h2>");
    res.statusCode = 404;
  }
  res.write("</body>");
  res.write("</html>");
  return res.end();
});

const PORT = 3201;
SERVER.listen(PORT, () => {
  console.log("sever is runing on a PORT", PORT);
});
