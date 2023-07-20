interface DicesFunction {
  rollTheDices: () => void;
  reset: () => void;
}

const dices = () : DicesFunction => {
  let counter : number  = 0;
  let firstDices : number = null;
  let secondDices : number = null;

  if (firstDices === null && secondDices === null) {
    console.log('Tira los dados')
  }
  const dicesRandom = () : number => Math.floor(Math.random() * (6) + 1);

  const rollTheDices = () : void => {
    firstDices = dicesRandom();
    secondDices = dicesRandom();
    counter = counter + 1;
    const message = `Su intento No. ${counter} dio: ${firstDices} y ${secondDices}`;

    if (!(firstDices === 6 && secondDices === 6)) {
      console.log(message);
    } else {
      console.log(message);
      console.log("Te has ganado un globo 🎈");
    }
  }

  const reset = () : void=> {
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
roll.rollTheDices();
roll.reset()
roll.rollTheDices();


