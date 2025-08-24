//             External Module
const express = require("express");
const bodyParser = require("body-parser");
// Core Module
const path = require("path");
const rootDir = require("./utils/utilsPath");
//Local Modules
const homeRouter = require("./routes/homeRouter");
const formRouter = require("./routes/formRouter");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(homeRouter);
app.use("/user", formRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});
const PORT = 3200;
app.listen(PORT, () => {
  console.log(`server listen on a PORT ${PORT}`);
});
