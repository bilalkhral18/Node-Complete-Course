const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("Request came in first middleware");
//   console.log(req.url, req.method);
//   next();
// });
// app.use((req, res, next) => {
//   console.log("Request came in second middleware");
//   console.log(req.url, req.method);
//   next();
// });
// app.use((req, res, next) => {
//   console.log("Request came in third middleware");
//   console.log(req.url, req.method);
//   // res.send("<p>Response send sucessfully</p>");
//   next();
// });
app.get("/", (req, res, next) => {
  console.log("req came in the / middleware");
  next();
});
app.get("/contact-us", (req, res, next) => {
  res.send(`<form action="/contact-us" method="post">
      <label for="username"
        >Enter your name:
        <input
          type="text"
          name="username"
          placeholder="Enter your name"
          id="username"
        />
      </label><br/><br/>
      <label for="userEmail"
        >Enter your Email:
        <input
          type="email"
          name="userEmail"
          placeholder="example@gmail.com"
          id="userEmail"
        />
      </label><br/><br/>
       <button>submit</button>
    </form>`);
});
app.post("/contact-us", (req, res, next) => {
  res.send(`<p>Data submit sucessfully</p>`);
  next();
});
const PORT = 3200;
app.listen(PORT, () => {
  console.log("server runing on a port ", PORT);
});
