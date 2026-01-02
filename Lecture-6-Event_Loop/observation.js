const fs = require("fs");
console.log("1. start script");
// sync blocking code
console.log("2. Reading file synchronously");
const datasync = fs.readFileSync("./newuser.txt", "utf-8");
console.log("3. synchronous read complete");
// async non-blocking code
console.log("4. Reading file asynchronously");
fs.readFile("./newuser.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
  } else {
    console.log("5. Asynchronous read complete");
  }
});
console.log("6. End of script");
