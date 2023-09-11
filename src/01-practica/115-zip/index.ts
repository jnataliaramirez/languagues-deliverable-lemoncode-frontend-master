type ZipObjectFunction = (keys: string[], values: string[]) => object;

const zipObject: ZipObjectFunction = (keys, values) => {
  const result = {};

  keys.forEach((key, i) => {
    result[key] = values[i];
  });

  return result;
};

console.log(
  zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])
);

// Challenge

const zipObjectChallenge: ZipObjectFunction = (keys, values) => {
  const result = {};

  keys.forEach((key, i) => {
    result[key] = values[i];
  });

  for (const key in result) {
    if (result[key] === undefined) {
      delete result[key];
    }
  }

  return result;
};

console.log(zipObjectChallenge(["spanish", "english", "french"], ["hola"]));
