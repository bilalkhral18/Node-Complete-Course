// Core Modules
const http = require("http");

// Now I have to create a http server
const server = http.createServer((req, res) => {
  console.log(req);
});

const PORT = 3300;
// Now Server is started listening on a PORT 3300
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
