const dices = () => {
  const dicesRandom = () => Math.floor(Math.random() * (6) + 1);
  let counter = 0;
  let firstDices = null;
  let secondDices = null;

  const rollTheDices = () => {
    if (firstDices === null && secondDices === null) {
      console.log('Tira los dados')
    }

    firstDices = dicesRandom();
    secondDices = dicesRandom();
    counter = counter + 1;

    if (!(firstDices === 6 && secondDices === 6)) {
      console.log(`Su intento No. ${counter} dio: ${firstDices} y ${secondDices}`);
    } else {
      console.log(`Su intento No. ${counter} dio: ${firstDices} y ${secondDices}`)
      console.log("Te has ganado un globo 🎈")
    }
  }

  const reset = () => {
    firstDices = null;
    secondDices = null;
    counter = 0;

    console.log("El contador se pondrá en cero...");
  }

  return {
    rollTheDices,
    reset,
  }
}

const roll = dices();
roll.rollTheDices();
roll.rollTheDices();
roll.reset()
roll.rollTheDices();
