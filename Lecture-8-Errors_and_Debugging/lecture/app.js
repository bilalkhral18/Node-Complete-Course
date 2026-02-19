// Internal Module
const http = require("http");
// Local Module
// LOCAL MODULE
const requestHandler = require("./user");

const Server = http.createServer(requestHandler);

// const { syntax } = require("./syntax");
// const { runtime } = require("./runtime");
// const testlogical = require("./logical");
// // Creating Server
// const Server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
//   // syntax();
//   runtime();
//   // debugger;
//   testlogical();
// });

// Server Start listening
const PORT = 3204;
Server.listen(PORT, () => {
  console.log(`Server listen on a ${PORT} Port no`);
});
