const additionHandler = (req, res) => {
  let body = [];
  req.on("data", (chunk) => {
    console.log("Received data chunk:", chunk);
    body.push(chunk);
  });
  req.on("end", () => {
    console.log("Request body received:", body);
    const bodyObject = new URLSearchParams(Buffer.concat(body).toString());
    console.log("Parsed body:", bodyObject);
    let object = {};
    for (const [key, val] of bodyObject) {
      object[key] = val;
    }
    let result = parseInt(object.num1) + parseInt(object.num2);
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
    <p>The sum of ${object.num1} and ${object.num2} is:  ${result}</p>
    <a href="/calculator">Go back to Calculator</a>
</body>
</html>`);
    return res.end();
  });
};

module.exports = {
  additionHandler,
};
