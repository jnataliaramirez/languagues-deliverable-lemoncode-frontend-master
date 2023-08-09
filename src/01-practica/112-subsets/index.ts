// Subsets

const subsets = (word: string): string[] => {
  const result: string[] = [];
  for (let i = 1; i < word.length; i++) {
    result.push(word.substring(i));
  }

  return result;
};

// console.log(subsets("message"));

// Challenge

const subsetsChallenge = (word: string): string[] => {
  const wordArray: string[] = word.split("");

  const result = wordArray.map((_, i) => word.substring(i + 1));
  result.pop();

  return result;
};

console.log(subsetsChallenge("message"));
