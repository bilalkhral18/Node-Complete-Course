const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url.toLowerCase();
  const method = req.method;

  if (url === "/" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Myntra</title></head><body>");
    res.write("<h1>This is the Home Page Of Myntra app</h1>");
    res.write("<a href='/personal-info'>go to form</a>");
    res.write("</body></html>");
    return res.end();
  }

  if (url === "/personal-info" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Form</title></head><body>");
    res.write(`
      <form action="/submit-details" method="POST">
        <input type="text" name="name" placeholder="Enter your name" />
        <br />
        <input type="radio" name="Gender" value="Male" /> Male
        <input type="radio" name="Gender" value="Female" /> Female
        <br />
        <button type="submit">Submit</button>
      </form>
    `);
    res.write("</body></html>");
    return res.end();
  }

  if (url === "/submit-details" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params);

      fs.writeFile("newuser.txt", JSON.stringify(bodyObject), () => {
        res.writeHead(302, { Location: "/" });
        return res.end();
      });
    });

    return;
  }

  // 404 fallback
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>404 Page Not Found</h1>");
  res.end();
};

module.exports = requestHandler;
