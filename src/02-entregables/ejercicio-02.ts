console.log("************** DELIVERABLE 02 *********************");

// ---
const example1: number[] = [1, 2, 3, 4];
const example2: string[] = ["lorem", "ipsum", "amet"];
const example3: number[] = [5, 6, 7, 8];
const example4: string[] = ["urna", "metus", "blandit"];

// * Entregable
const concat = <T, U>(arr1: T[], arr2: U[]): (T | U)[] => {
  return [...arr1, ...arr2];
};
// console.log("concat()", concat(example1, example2));

// * Opcional
type ConcatOpt = <T extends number | string>(...arrays: T[][]) => T[];

const concatOpt: ConcatOpt = (...arrays) => arrays.flat(1);

// console.log(
//   "concatOpt()",
//   concatOpt<number | string>(example2, example1, example4, example3)
// );
