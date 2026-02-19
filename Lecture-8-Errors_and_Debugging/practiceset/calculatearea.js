let width = 10,
  height = 500;
function calculatearea() {
  return width + height;
}
if (calculatearea > 100) {
  console.log("area is large");
} else {
  console.log("area is small");
}
if (width + height > 100) {
  console.log("The Area is greater or equal to 100");
}
module.exports = calculatearea;
