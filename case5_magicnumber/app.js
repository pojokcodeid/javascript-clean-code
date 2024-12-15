// contoh kurang tepat
// menggunakan magic number
function calculateDiscount(price) {
  return price * 0.1;
}
console.log(calculateDiscount(100));

// contoh tepat
// gunakan konstanta
const DISCOUNT_RATE = 0.1;

function calculateDiscount2(price) {
  return price * DISCOUNT_RATE;
}
console.log(calculateDiscount2(100));

// contoh lain gunakan enum
const UserRole = {
  ADMIN: "admin",
  USER: "user",
  GUEST: "guest",
};

function checkAccess(role) {
  if (role === UserRole.ADMIN) {
    console.log("Admin access granted");
  }
}

checkAccess(UserRole.ADMIN);
