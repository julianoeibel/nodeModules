const PI = Math.PI;


function circleArea(radiusLength) {
  return PI * radiusLength ** 2;
}
function squareArea(sideLength) {
  return sideLength ** 2;
}

module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;