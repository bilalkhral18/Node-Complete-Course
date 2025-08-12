const errorHandler = () => {
  function calculateArea(width, height) {
    return width + height;
  }
  let width=10  height=5;
  if(area > 100){
    console.log("Area is greater");
  }else{
    console.log("Area is small")
  }
  if(width+height >100){
    console.log("Area is greater then or equal to 100")
  }
};
module.exports = { errorHandler };
