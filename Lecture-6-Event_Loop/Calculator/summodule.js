const additionHandler = (req, res) => {
  console.log("1. request received for addition");
  let body = [];
  let result;
  req.on("data", (chunk) => {
    console.log("2. Received data chunk:", chunk);
    body.push(chunk);
  });
  req.on("end", () => {
    console.log("3. Request body received:", body);
    const bodyObject = new URLSearchParams(Buffer.concat(body).toString());
    console.log("Parsed body:", bodyObject);
    let object = {};
    for (const [key, val] of bodyObject) {
      object[key] = val;
    }
    result = parseInt(object.num1) + parseInt(object.num2);
  });
  console.log("4. Result calculated:", result);
  res.setHeader("Content-Type", "text/html");
  res.write(`<!DOCTYPE html>
<html lang="en">  
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator Result</title>
</head>
<body>
    <h1>Calculator Result</h1>
    <p>The sum is:  ${result}</p>
    <a href="/calculator">Go back to Calculator</a>
</body>
</html>`);
  return res.end();
};

module.exports = {
  additionHandler,
};
