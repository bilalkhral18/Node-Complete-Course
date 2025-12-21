//   CORE MODULE
const http = require("http");

const SERVER = http.createServer((req, res) => {
  console.log(req);
});

const PORT = 3300;

SERVER.listen(PORT, () => {
  console.log(`Server Listen On a ${PORT}`);
});
