const subsets = (word : string) : string[] => {
  const result = [];
  for (let i = 1; i < word.length; i++) {
    result.push(word.substring(i));
  }
  return result;
}

console.log(subsets("natalia"));