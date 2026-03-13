// Ecternal Module
const express = require("express");
// Internal Module
const path = require("path");
// start to build app
const app = express();
//setUp Ejs
app.set("view engine", "ejs");
app.set("views", "views");
// Local Module
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const rootdir = require("./utils/pathUtils");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootdir, "public")));
app.use(userRouter);
app.use("/host", hostRouter);
app.use((req, res, next) => {
  // res.status(404).send("<h1>404 page not found</h1>");
  res.status(404).render("404", { pagetitle: "404 — Page Not Found · Airbnb" });
});
app.listen(3300, () => {
  console.log("server listen on a port no 3300");
});
