// CORE MODULE
const http = require("http");
const fs = require("fs");
const { error } = require("console");
const SERVER = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); This is used to exit the event loop
  let url = req.url.toLowerCase();
  //   res.setHeader("content-type", "text/html");
  //   res.write("<html>");
  //   res.write(
  //     "<head><title>This is the firts programe :  Which Handles the Rourtes Request</title></head>"
  //   );
  //   res.write("<body>");
  //   if (url === "/") {
  //     res.write("<h1>This is the complete coding.in</h1>");
  //     res.write("<h1>like / share / subscribe</h1>");
  //     // res.end;
  //   } else if (url === "/products") {
  //     res.write("<h1>Wellcome to the product page </h1>");
  //     // res.end;
  //   } else if (url === "/women") {
  //     res.write("<h1>Wellcome to the women page </h1>");
  //     // res.end;
  //   } else {
  //     res.statusCode = 404;
  //     res.write("<h4>Error 404 page not found<h4>");
  //   }
  //   res.write("</body>");
  //   res.write("</html>");
  //   res.end();
  if (req.method === "POST" && url === "/submit-details") {
    fs.writeFileSync("./newuser.txt", "Details are successfully submitted");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>Myntra App</title></head>");
  res.write("<body>");
  if (url === "/") {
    res.write("<h1>This is the Home Page Of Myntra app</h1>");
    res.write("<a href='/personal-info'>go to form</a>");
  } else if (url === "/personal-info") {
    res.write(`<form action="/submit-details" method = "POST">
      <label for="name"
        >Name:
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
      </label>
      <label for="Gender"
        >Gender: <input type="radio" name="Gender" id="Male" /><label
          for="Male"
        >
          Male:</label
        >
        <input type="radio" name="Gender" id="Female" /><label
          for="Female"
        >
          Female:</label
        >
      <button type="submit">Submit</button>
    </form>`);
  }
  res.write("</body>");
  res.write("</html>");
  return res.end();
});

const PORT = 3200;
SERVER.listen(PORT, () => {
  console.log(`server listen on  http://localhost:${PORT}`);
});
