const { error } = require("console");
const fs = require("fs");
const requestHandler = (req, res) => {
  const url = req.url.toLowerCase();
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
    let body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk); // Collects the data chunks
    });
    req.on("end", () => {
      console.log("1. data received");
      body = Buffer.concat(body).toString(); // Converts the collected data to a string
      const parsedBody = new URLSearchParams(body); // Parses the string into key-value pairs
      const bodyObject = Object.fromEntries(parsedBody); // Converts the parsed data to an object
      console.log(bodyObject);
      console.log("2. data going to be saved");
      fs.writeFile("user.txt", JSON.stringify(bodyObject), (error) => {
        if (error) {
          console.error("Error writing to file:", error);
          return res.end("Error saving user data.");
        }
        console.log("3.User data saved successfully.");
        console.log("4. Redirecting to home page");
        res.statusCode = 302; // Redirects to the home page
        res.setHeader("Location", "/");
        return res.end(); // Ends the response
      }); // Saves the data to a file
    });
  } else {
    res.write("<h1>404 Error Page</h1>");
    res.write("</html>");
    return res.end();
  }
  // return res.end(); // Ends the response
};

module.exports = requestHandler;
