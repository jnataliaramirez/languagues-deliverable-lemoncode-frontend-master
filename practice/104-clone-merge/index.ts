// ## Apartado A

const clone = <T>(source: T): T => ({ ...source });

// ## Apartado B

const merge = <T>(source: T, target: T): T => ({
  ...clone(target),
  ...clone(source),
});
