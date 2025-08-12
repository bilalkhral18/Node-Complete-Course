const http = require("http");
const { syntax } = require("./syntax");
const { runtime } = require("./runtime");
const { logicalErrors } = require("./logical");
const server = http.createServer((req, res) => {
  console.log(req.url);
  syntax();
  runtime();
  logicalErrors();
});

const PORT = 3004;
server.listen(PORT, () => {
  console.log(`server listen on a port ${PORT}`);
});
