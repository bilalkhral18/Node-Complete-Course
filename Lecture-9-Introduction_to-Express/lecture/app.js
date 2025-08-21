//     CORE Module
const http = require("http");
//     External Module
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("came in first middleware", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("came in second middleware", req.url, req.method);
  res.send("<p>Response from 2nd middleware</p>");
});
const server = http.createServer(app);

const PORT = 3200;
server.listen(PORT, () => {
  console.log(`server listen on PORT ${PORT}`);
});
