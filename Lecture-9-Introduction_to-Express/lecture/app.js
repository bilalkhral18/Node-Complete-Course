// CORE Module
const http = require("http");
// EXTERNAL Module
const express = require("express");
// Local Module
const requestHandler = require("./user");

const app = express();
app.get("/", (req, res, next) => {
  console.log("came in first middleware", req.url, req.method);
  // res.send("<P>Wellcome to first middleware</p>");
  next();
});
app.post("/submit_details", (req, res, next) => {
  console.log("came in second middleware", req.url, req.method);
  res.send("<P>Wellcome to node.js coding series</p>");
});
app.use("/", (req, res, next) => {
  console.log("came in last middleware", req.url, req.method);
  // res.send("<P>Wellcome to first middleware</p>");
  next();
});
// const Server = http.createServer(app);

// Server Start listening
const PORT = 3204;
app.listen(PORT, () => {
  console.log(`Server listen on a ${PORT} Port no`);
});
