const http = require("http");
const fs = require("fs");

const Server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  const url = req.url.toLowerCase();
  // process.exit(); //Stops Event Loop
  // res.setHeader("Content-Type", "text/html");
  // if (url === "/") {
  //   res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  //   return res.end();
  // } else if (url === "/products") {
  //   res.write("<h4>This is the products page</h4>");
  //   return res.end();
  // } else {
  //   res.write("<h1>404 Error Page</h1>");
  //   return res.end();
  // }
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<h1>Enter Your Details</h1>");
    res.write("<form action='/create-user' method='POST'>");
    res.write("<label for='username'>Name:</label>");
    res.write(
      "<input type='text' id='username' name='username' placeholder='Enter your name' required>"
    );
    res.write("<label for='Gender'>Gender:</label>");
    res.write("<input type='radio' id='male' name='gender' value='male'>");
    res.write("<label for='male'>Male:</label> </br>");

    res.write("<input type='radio' id='female' name='gender' value='female'>");
    res.write("<label for='female'>Female:</label> </br>");

    res.write("<input type='radio' id='other' name='gender' value='other'>");
    res.write("<label for='other'>Other:</label> </br>");

    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");
    res.write("</html>");
    return res.end(); // Ends the response
  } else if (url === "/create-user" && req.method === "POST") {
    fs.writeFileSync("user.txt", "Bilal Rai");
    res.statusCode = 302; // Redirects to the home page
    res.setHeader("Location", "/");
    return res.end(); // Ends the response
  } else {
    res.write("<h1>404 Error Page</h1>");
    res.write("</html>");
    return res.end();
  }
  // return res.end(); // Ends the response
});

const PORT = 3000;
Server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
