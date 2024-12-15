function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating a delay like a network request
    setTimeout(() => {
      // Simulating successful response with dummy data
      const success = true; // Change this to false to simulate an error

      if (success) {
        resolve({
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
        });
      } else {
        reject("Something went wrong while fetching the data");
      }
    }, 2000); // Simulating a 2-second delay
  });
}

// penggunaan yang kurang tepat
fetchData()
  .then((data) => {
    console.log("Data fetched successfully:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// contoh menggunakan async await
async function getUserData() {
  try {
    const data = await fetchData(); // Wait for the Promise to resolve
    console.log("Data fetched successfully:", data);
  } catch (error) {
    console.error("Error:", error); // Handle any error that occurs
  }
}

// Call the async function
getUserData();
