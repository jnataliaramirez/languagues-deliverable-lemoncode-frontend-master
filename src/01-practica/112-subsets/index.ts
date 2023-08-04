const subsets = (word : string) => { 
  const arrayWord = word.split('');
  let newArrayWord = [];

  for (let i = 1; i < arrayWord.length; i++) {
    newArrayWord.push(arrayWord.at(-i))
  }

  console.log(newArrayWord.reverse())

};

console.log('message')
console.log(subsets("message"));