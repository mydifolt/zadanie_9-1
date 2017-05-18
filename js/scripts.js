//zadanie 9-1

function getTriangleArea(a, h) {
  
  if(a <= 0){
    console.log('niewłaściwe dane');
    return;
  }
  if(h <= 0){
    console.log('niewłaściwe dane');
    return;
  }
  var value = a*h/2;
  return value;
}

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(100, 5);
var triangle3Area = getTriangleArea(-10, 15);


