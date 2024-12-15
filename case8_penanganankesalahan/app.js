// contoh penanganan kesalahan kurang baik
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero!";
  }
  return a / b;
}

console.log(divide(10, 0)); // Output: Error: Division by zero!

// contoh penanganan kesalahan baik
function fetchData(url) {
  try {
    const response = fetch(url);
    return response.json();
  } catch (error) {
    console.log("Something went wrong : ", error.message);
  }
}

fetchData("https://example.com");
