const http = require("http");

function requestListener(req, res) {
  console.log(req);
}

const server = http.createServer(requestListener);
const PORT = 3400;
server.listen(PORT, () => {
  console.log(`Server listen on a port ${PORT}`);
});
