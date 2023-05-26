console.log("************** PRACTICE 105 - APARATADO B *********************");

// *** ## Apartado 2

// --- Types

interface Address {
  city: string;
  code: number;
}

interface User2 {
  name: string;
  age: number;
  address: Address;
  friends: Array<string>;
}

interface AreArraysEqual {
  <T>(arr1: T[], arr2: T[]): boolean;
}

interface IsDeepEqual {
  (a: object, b: object): boolean;
}

const user2 : User2= {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
const clonedUser2 : User2= {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

const areArraysEqual: AreArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const isDeepEqual: IsDeepEqual = (a, b) => {
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
      return false;
    }

    // Identifica si el elementoA y elementoB no son objetos (es decir primitivos)
    if (!(typeof elementA === "object") && !(typeof elementB === "object")) {
      if (elementA !== elementB) {
        return false;
      }
    } else {
      // Verificar si los dos son arrays
      if (Array.isArray(elementA) && Array.isArray(elementB)) {
        if (!areArraysEqual(elementA, elementB)) {
          return false;
        }
        // Sino es un objeto y hace recursividad del objeto
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
