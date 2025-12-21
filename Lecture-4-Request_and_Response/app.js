// CORE MODULE
const http = require("http");

const SERVER = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); This is used to exit the event loop
});

const PORT = 3200;
SERVER.listen(PORT, () => {
  console.log(`server listen on  http://localhost:${PORT}`);
});
