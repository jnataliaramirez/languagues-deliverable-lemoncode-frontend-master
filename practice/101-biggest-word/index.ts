type BiggestWordFunction = (phrase: string) => string;

const biggestWord: BiggestWordFunction = (phrase) =>
  phrase
    .split(" ")
    .reduce((longest, current) =>
      current.length > longest.length ? current : longest
    );
