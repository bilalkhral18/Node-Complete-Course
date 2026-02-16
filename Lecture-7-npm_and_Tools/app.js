const http = require("http");

const SERVER = http.createServer((req, res) => {
  console.log(req.url);
});

const PORT = 3301;
SERVER.listen(PORT, () => {
  console.log(`server listen on a port http://${PORT}`);
});
