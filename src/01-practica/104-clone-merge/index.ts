console.log("************** PRACTICE 104 *********************");

// ## Apartado A

const cloneA = <T>(source: T): T => ({ ...source });

// ## Apartado B

const mergeB = <T>(source: T, target: T): T => ({
  ...clone(target),
  ...clone(source),
});
