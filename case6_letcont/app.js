// Menggunakan var
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // Output: 3, 3, 3 (karena `i` di-*hoist* dan diubah setelah loop selesai)
  }, 1000);
}

// Menggunakan let
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // Output: 0, 1, 2 (karena `i` memiliki block scope, setiap iterasi memiliki `i` sendiri)
  }, 1000);
}

// Menggunakan const
const PI = 3.14;
// PI = 3.14159;  // Error: Assignment to constant variable
console.log(PI); // Output: 3.14
