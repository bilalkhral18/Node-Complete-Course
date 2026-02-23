// External module
const express = require("express");
// server creation
const app = express();

app.use((req, res, next) => {
  console.log("came in first middleware", req.path, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("came in second middleware", req.path, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("came in third middleware", req.path, req.method);
  // res.send("response send correctly thanks for your service");
  next();
});
app.get("/", (req, res, next) => {
  console.log("came in fourth  middleware", req.path, req.method);
  res.send(`<p>Wellcome to the home page</p>
    <button>
      <a href="/contact-us">contact-us</a>
    </button>`);
  next();
});
app.get("/contact-us", (req, res, next) => {
  console.log("came in fifth  middleware", req.path, req.method);
  res.send(`<form action="/contact-us" method="POST">
      <label for="name"
        >Full_Name:
        <input type="text" name="Full_Name" id="name" />
      </label>
      <label for="email"
        >Email:
        <input type="email" name="email" id="email" />
      </label>
      <button type="submit">submit</button>
    </form>`);
});
app.post("/contact-us", (req, res, next) => {
  res.send("<p>form submit seuccessfully</p>");
});
app.listen(3400, () => {
  console.log("server listen on a port 3400");
});
