const logicalErrors = () => {
  let x = 5;
  if ((x = 10)) {
    console.log("This Prints The value");
  } else {
    console.log("false prints this:");
  }
  let num = "10";
  let sum = num + 5;
  console.log(sum);
};
module.exports = { logicalErrors };
