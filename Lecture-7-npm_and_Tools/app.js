const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

const PORT = 3004;
server.listen(PORT, () => {
  console.log(`server listen on a port ${PORT}`);
});
