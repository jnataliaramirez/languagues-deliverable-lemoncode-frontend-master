console.log("************** DELIVERABLE 03 *********************");

// --- Types
interface Information {
  name: string;
  surname?: string;
  country?: string;
  age?: number;
  married?: boolean;
}

// --- Datos
const a1: Information = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b1: Information = { name: "Luisa", age: 31, married: true };

//  * -->  Clone
const clone = <T>(source: T): T => ({ ...source });
console.log("clone()", clone(a));

//  * -->  Merge
const merge = <T, U>(source: T, target: U): T | U => ({
  ...clone(target),
  ...clone(source),
});
console.log("merge()", merge(a1, b1));