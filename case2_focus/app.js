const user = {
  name: "John Doe",
  email: "m4oB2@example.com",
};
// contoh kurang baik
// function besar dan tidak fokus
function processUserData(user) {
  // Validate user data
  if (!user.name || !user.email) {
    throw new Error("Invalid user data");
  }
  // Save user to database
  (function () {
    console.log("Save user to database");
  })();
  // Send welcome email
  (function () {
    console.log(`Send welcome email to ${user.email}`);
  })();
}
processUserData(user);

// contoh baik
// function kecil dan focus
// Small, focused functions
function validateUserData(user) {
  if (!user.name || !user.email) {
    throw new Error("Invalid user data");
  }
}

function saveUserToDatabase(user) {
  console.log("Save user to database");
}

function sendWelcomeEmail(email) {
  console.log(`Send welcome email to ${email}`);
}

function processUserData(user) {
  validateUserData(user);
  saveUserToDatabase(user);
  sendWelcomeEmail(user.email);
}

processUserData(user);
