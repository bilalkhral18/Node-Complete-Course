//CORE Module
// const http = require("http");

//EXTERNAL Module
const express = require("express");

//LOCAL Module
const requestHandler = require("./user"); // Importing the request handler from app.js

const app = express();

app.get("/", (req, res, next) => {
  console.log("Request came in first middleware", req.url, req.method);
  // res.send("<p>Wellcome to complete coding.in</p>");
  next();
});
app.post("/submit-details", (req, res, next) => {
  console.log("Request came in Second middleware", req.url, req.method);
  res.send("<p>Req came in submit-detaisl</p>");
  // next();
});
app.get("/", (req, res, next) => {
  console.log("Request came in Third middleware", req.url, req.method);
  res.send("<p>Req came in another middle ware</p>");
  // next();
});
// const Server = http.createServer(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
