console.log("************** PRACTICE 104 *********************");

// --- Types
interface userToClone {
  name: string;
  surname?: string;
  country?: string;
  age?: number;
  married?: boolean;
}

// --- Datos
const aToClone: userToClone = { name: "Maria", surname: "Ibañez", country: "SPA" };
const bToClone: userToClone = { name: "Luisa", age: 31, married: true };

// ## Apartado A

const cloneA = <T>(source: T): T => ({ ...source });

console.log(cloneA(aToClone));

// ## Apartado B

const mergeB = <T, U>(source: T, target: U): T | U  => ({
  ...cloneA(target),
  ...cloneA(source),
});

console.log(mergeB(aToClone, bToClone));
