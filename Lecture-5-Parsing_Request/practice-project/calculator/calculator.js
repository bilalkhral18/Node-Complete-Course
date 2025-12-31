const additionmodule = require("./addition");
const requesthandler = (req, res) => {
  console.log(req.url, req.method);
  let url = req.url.toLowerCase();
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head>");
  res.write("<title>Calculator</title>");
  res.write("</head>");
  res.write("<body>");
  if (url === "/" || url === "home") {
    res.write(
      "<h1>Wellcome to the home page</h1>\n  <a href='/calculator'>Calculator</a>"
    );
    return res.end();
  } else if (url === "/calculator") {
    res.write(`
      <form action="/calculate-result" method="POST">
      <label for="num1">Num1:
          <input
            type="number"
            name="Num1"
            id="num1"
            placeholder="Enter num1" />
            </label>
        <label for="num2">Num2:
          <input type="number" name="Num2" id="num2" placeholder="Enter num2"/>
          </label>
        <button type="submit">Sum</button>
        </form>
        `);
    return res.end();
  } else if (url === "/calculate-result") {
    additionmodule(req, res);
  }
  res.write("</body>");
  res.write("</html>");
};
module.exports = requesthandler;
