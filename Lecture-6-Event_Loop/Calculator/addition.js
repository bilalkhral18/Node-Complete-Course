let additionmodule = (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const finalbody = {};
    let fullbody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullbody);
    for (const [key, value] of params.entries()) {
      finalbody[key] = value;
    }
    let result = Number(finalbody.Num1) + Number(finalbody.Num2);
    res.write(
      `<h1>The Result of ${finalbody.Num1} and ${finalbody.Num2} = ${result}</h1>`
    );
    return res.end();
  });
};
module.exports = additionmodule;
