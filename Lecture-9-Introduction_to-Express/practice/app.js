//             External Module
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method, "req came in first middleware");
  next();
});
app.use((req, res, next) => {
  console.log(req.url, req.method, "req came in second middleware");
  next();
});
app.use((req, res, next) => {
  console.log(req.url, req.method, "req came in third middleware");
  // res.send("<p>Response Send Successfully</p>");
  next();
});
app.get("/", (req, res, next) => {
  console.log(req.url, req.method, "req came in fifth middleware");
  res.send(`<p>Wellcome to home page</p> 
  <a href=/contact-us>contact-us</a>
    `);
  // next();
});
app.get("/contact-us", (req, res, next) => {
  console.log(req.url, req.method, "req came in sixth middleware");
  res.send(` <form action="/contact-us" method="post">
      <label for="username"
        >Enter your name:
        <input
          type="text"
          name="username"
          placeholder="Enter your name"
          id="username"
        />
      </label>
      <label for="userEmail"
        >Enter your Email:
        <input
          type="email"
          name="userEmail"
          placeholder="example@gmail.com"
          id="userEmail"
        />
      </label>
    <button>submit</button>
    </form>`);
  // next();
});
app.post("/contact-us", (req, res, next) => {
  console.log(req.url, req.method, "req came in seventh middleware");
  res.send("<p>page submit sucessfully</p>");
});
const PORT = 3200;
app.listen(PORT, () => {
  console.log(`server listen on a PORT ${PORT}`);
});
