const http = require("http");
const { appHandler } = require("./app");
const server = http.createServer(appHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
