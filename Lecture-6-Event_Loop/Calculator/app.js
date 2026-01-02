// CORE MODULE
const http = require("http");
// LOCAL MODULE
const requesthandler = require("./calculator");
const SERVER = http.createServer(requesthandler);

const PORT = 3202;
SERVER.listen(PORT, () => {
  console.log(`server listen on a Port ${PORT}`);
});
