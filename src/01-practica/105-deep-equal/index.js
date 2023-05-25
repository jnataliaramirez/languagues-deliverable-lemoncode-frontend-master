console.log("************** PRACTICE 105 *********************");

// *** ## Apartado 1

const user = { name: "María", age: 30 };
const clonedUser = { name: "María", age: 30 };

const isEqual = (a, b) => {
  // 1. Verificar si tienen la misma cantidad de claves:
  // a. Se sacan en un array las claves de los objetos, para verificar que tienen la misma longitud:
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // b. Se verifica que tengan el mismo número de claves:
  if (keysA.length !== keysB.length) {
    return false;
  }

  // 2. Se verifica que los objetos tengan la misma clave y el mismo valor, sí alguno es diferente retornara un false.
  for (const key in a) {
    if (!b.hasOwnProperty(key) || b[key] !== a[key]) {
      return false;
    }
  }

  return true;
};

// console.log("isEqual: ", isEqual(user, clonedUser)); // true

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

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

const isDeepEqual = (a, b) => {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key in a) {
    const elementA = a[key];
    const elementB = b[key];

    // Identifica si la clave de a, esta en b
    if (!b.hasOwnProperty(key)) {
      console.log(1);
      return false;
    }

    // Identifica si el valor de b es diferente al de a en primitivo
    if (!(typeof elementA === "object") && !(typeof elementB === "object")) {
      if (elementA !== elementB) {
        console.log(2);
        return false;
      }
    } else {
      // Verificar si los dos son objetos
      console.log(3);
      if (Array.isArray(elementA) && Array.isArray(elementB)) {
        if (!areArraysEqual(elementA, elementB)) {
          return false;
        }
      } else {
        if (!isDeepEqual(elementA, elementB)) {
          return false;
        }
      }
    }
  }

  return true;
};

console.log("isDeepEqual: ", isDeepEqual(user2, clonedUser2)); // true
