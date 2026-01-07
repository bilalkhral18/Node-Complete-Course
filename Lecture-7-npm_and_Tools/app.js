// CORE MODULE
const http = require("http");
// LOCAL MODULE
const SERVER = http.createServer((req, res) => {
  console.log(req.url, req.method);
});

const PORT = 3202;
SERVER.listen(PORT, () => {
  console.log(`server listen on a Port ${PORT}`);
});
