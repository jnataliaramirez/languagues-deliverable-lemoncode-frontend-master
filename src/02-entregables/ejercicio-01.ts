console.log("************** DELIVERABLE 01 *********************");

const example = ["lemoncode", 2, true, 4, "nati"];

// * Función Head
const head = (array) => {
  const [first] = array;
  return first;
};
// console.log("head()", head(example));

// * Función Tail
const tail = (array) => {
  const [_first, ...others] = array;
  return others;
};
// console.log("tail()", tail(example));

// * Función Init
const init = (array) => array.slice(0, array.length - 1);
// console.log("init()", init(example));

// * Función Last
const last = (array) => array.findLast((last) => last);
// console.log("last()", last(example));
