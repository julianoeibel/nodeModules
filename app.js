/* app.js */ 

const radius = 5;
const sideLength = 10;

const areaFunctions = require('./shape-area');

const areaOfCircle = areaFunctions.circleArea(radius);
const areaOfSquare = areaFunctions.squareArea(sideLength);

console.log(areaOfCircle);
console.log(areaOfSquare);


const { circleArea, squareArea } = require('./shape-area');

const areaOfCircle1 = circleArea(radius);
const areaOfSquare1 = squareArea(sideLength);

console.log(areaOfCircle1);
console.log(areaOfSquare1);