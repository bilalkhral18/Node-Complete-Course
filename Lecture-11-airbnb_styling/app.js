// External Module
const express = require("express");
const bodyParser = require("body-parser");
//  Core Module
const path = require("path");
const rootDir = require("./utils/pathUtil");
// Local Module
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

const app = express();
app.use(express.static(path.join(rootDir, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3200, () => {
  console.log("server listen on a PORT 3200");
});
