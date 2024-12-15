// contoh penggunaan variable dan function tidak bagus
// karena tidak jelas dan tidak mudah difahami

let a = 5;
let b = 10;
function c(x, y) {
  return x + y;
}

console.log(c(a, b));

// contoh penggunaan variable dan function yang bagus
// Good naming
let width = 5;
let height = 10;
function calculateArea(width, height) {
  return width * height;
}

console.log(calculateArea(width, height));
