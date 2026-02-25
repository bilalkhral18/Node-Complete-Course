// External module
const express = require("express");
// Local MOdule
const homeRouter = require("./routes/homeRouter");
const contactRouter = require("./routes/contactRouter");
// server creation
const app = express();
// Core Module
const path = require("path");
// Local Module
const rootDir = require("./utils/utilsPath");
// for data getting from user in the form of url encoded
// app.use(express.urlencoded({ extended: true }));
// This is also valid for body parsing
// External Module
const body_parser = require("body-parser");
app.use(body_parser.urlencoded({ extended: true }));
app.use(homeRouter);
app.use(contactRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});
app.listen(3400, () => {
  console.log("server listen on a port 3400");
});
