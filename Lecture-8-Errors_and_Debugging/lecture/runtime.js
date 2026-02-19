const testruntime = () => {
  // console.log(x);
  console.log("This is runtime error");
  console.log(Z);
};

module.exports = { runtime: testruntime };
