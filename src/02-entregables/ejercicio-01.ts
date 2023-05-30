console.log("************** DELIVERABLE 01 *********************");

// --- Types
type functionReturnArray = <T>(array: T[]) => T[];
type functionReturnT = <T>(array: T[]) => T;

// ---
const example: number[] = [1, 2, 3, 4, 5];

// * --> Función Head
const head: functionReturnT = (array) => {
  const [first] = array;
  return first;
};
console.log("head()", head(example));

// * --> Función Tail
const tail: functionReturnArray = (array) => {
  const [_first, ...others] = array;
  return others;
};
console.log("tail()", tail(example));

// * --> Función Init
const init: functionReturnArray = (array) => array.slice(0, array.length - 1);
// console.log("init()", init(example));

// * --> Función Last
const last: functionReturnT = (array) => array.findLast((last) => last);
console.log("last()", last(example));
