// Ecternal Module
const express = require("express");
// Internal Module
const path = require("path");
// start to build app
const app = express();
// Local Module
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use("/host", hostRouter);
app.use((req, res, next) => {
  // res.status(404).send("<h1>404 page not found</h1>");
  res.status(404).sendFile(path.join(__dirname, "./", "views", "404.html"));
});
app.listen(3300, () => {
  console.log("server listen on a port no 3300");
});
