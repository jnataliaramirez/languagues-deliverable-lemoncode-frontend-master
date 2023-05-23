type BiggestWordFunction = (phrase: string) => string;

const biggestWord: BiggestWordFunction = (phrase) =>
  phrase
    .split(" ")
    .reduce((longest, current) =>
      current.length > longest.length ? current : longest
    );

console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
