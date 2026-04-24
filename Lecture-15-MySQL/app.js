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

const storeRouter = require("./routes/storeRouter");
const { hostRouter } = require("./routes/hostRouter");
const rootdir = require("./utils/pathUtils");
const errorController = require("./controllers/error");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootdir, "public")));
app.use(storeRouter);
app.use("/host", hostRouter);
app.use(errorController.errorMessage);
app.listen(3900, () => {
  console.log("server listen on a port no 3900");
});
