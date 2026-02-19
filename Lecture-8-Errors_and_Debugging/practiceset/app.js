// CORE Modules
const http = require("http");
//LOCAL Module
const calculatearea = require("./calculatearea");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  calculatearea();
});

const PORT = 3400;
server.listen(PORT, () => {
  console.log(`server listen on a port ${PORT}`);
});
