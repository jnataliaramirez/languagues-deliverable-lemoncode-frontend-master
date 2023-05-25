// ## Apartado 1

const user = { name: "María", age: 30 };
const clonedUser = { name: "María", age: 30 };

const isEqual = (a, b) => {
  for (const key in a) {
    if (b.hasOwnProperty(key) && b[key] !== a[key]) {
      return false;
    }
  }
  return true;
};

// console.log(isEqual(user, clonedUser)); // true

// ## Apartado 2