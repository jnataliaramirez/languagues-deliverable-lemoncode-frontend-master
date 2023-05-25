// ## Apartado 1

const user = { name: "María", age: 30 };
const clonedUser = { otra: "María", age: 30 };

const isEqual = (a, b) => {
  // if (typeof a !== typeof b) {
  //   return false;
  // }

  // if (typeof a !== "object" || a === null || b === null) {
  //   return a === b;
  // }

  // const keysA = Object.keys(a);
  // const keysB = Object.keys(b);

  // if (keysA.length !== keysB.length) {
  //   return false;
  // }

  for (const key in a) {
    console.log("b.hasOwnProperty(key)", b.hasOwnProperty(key));
    if (a.hasOwnProperty(key) === b.hasOwnProperty(key)) {
      // && b[key] === a[key]
      return true;
    }
  }

  return false;
};

console.log("isEqual: ", isEqual(user, clonedUser)); // true

// ## Apartado 2

var user2 = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
var clonedUser2 = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

const isDeepEqual = (a, b) => {
  if (typeof a !== typeof b) {
    return false;
  }

  if (typeof a !== "object" || a === null || b === null) {
    return a === b;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (!keysB.includes(key) || !isDeepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
};

// console.log(isDeepEqual(user2, clonedUser2)); // true
