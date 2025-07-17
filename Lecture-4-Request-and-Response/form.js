const http = require("http");
const fs = require("fs");

function requestListener(req, res) {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body>");
    res.write(`<form action='/submit-details' method='POST'>
      <input type='text' name='username' placeholder='Enter your name' />
      <br /><label for='gender'>Gender:</label><br />
      <input type='radio' name='gender' value='male' id="male" /> <label for='male'>Male</label>
      <input type='radio' name='gender' value='female' id="female" /> <label for='female'>Female</label>
      <button type='submit'>Submit</button>
      </form>`);
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (req.method === "POST" && req.url === "/submit-details") {
    fs.writeFileSync("userInfo.txt", "User details submitted successfully!");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  // Fallback route
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Page Not Found</title></head>");
  res.write("<body><h1>Page not found!</h1></body>");
  res.write("</html>");
  res.end();
}

const server = http.createServer(requestListener);
const PORT = 3400;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
