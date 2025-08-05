const { additionHandler } = require("./summodule");
const appHandler = (req, res) => {
  console.log(req.url, req.method);
  const url = req.url.toLowerCase();
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
    <h1>Hello, Wellcome to the HomePage</h1>
    <a href="/calculator">Go to Calculator</a>
</body>
</html>`);
    return res.end();
  } else if (url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
    <h1>Calculator</h1>
    <form action="/calculate-result" method="POST">
        <input type="number" name="num1" placeholder="Enter first number" required>
        <input type="number" name="num2" placeholder="Enter second number" required>
        <button type="submit">Sum</button>
</body>
</html>`);
    return res.end();
  } else if (url === "/calculate-result" && req.method === "POST") {
    additionHandler(req, res);
    return res.end();
  }
};

module.exports = {
  appHandler,
};
