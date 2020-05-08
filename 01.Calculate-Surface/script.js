/* JS Functions
Create a function who returns the area of a surface in m2. 
Return a string like "The area is your number here m2" */

// FUNCTION 1
function surfaceCalc(width, length) {

  let surface = width * length;
  return "The area is " + surface + " m2.";

}
// console.log(surfaceCalc(10, 5));


// FUNCTION 2 - ceil
function surfaceCalcNet(width, length) {

  surfaceNet = Math.ceil(width * length);
  return "The area is " + surfaceNet + " m2.";

}
// console.log(surfaceCalcNet(10, 5.11));


// FUNCTION 3 - floor
function surfaceCalcNet2(width, length) {

  surfaceNet = Math.floor(width * length);
  return "The area is " + surfaceNet + " m2.";

}
// console.log(surfaceCalcNet2(10, 5.11));
