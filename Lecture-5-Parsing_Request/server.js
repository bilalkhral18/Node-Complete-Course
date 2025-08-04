const http = require("http");
const requestHandler = require("./app"); // Importing the request handler from app.js
const Server = http.createServer(requestHandler);

const PORT = 3000;
Server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
