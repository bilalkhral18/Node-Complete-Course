const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req);
});

const PORT = 3200;

server.listen(PORT, () => {
  console.log("server runing on a ", PORT);
});
