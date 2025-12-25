// CORE MODULE
const http = require("http");
// LOCAL MODULE
const requestHandler = require("./user");

const SERVER = http.createServer(requestHandler);

const PORT = 3200;
SERVER.listen(PORT, () => {
  console.log(`server listen on  http://localhost:${PORT}`);
});
