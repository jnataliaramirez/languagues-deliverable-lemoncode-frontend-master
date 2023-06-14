console.log("************** DELIVERABLE 05 *********************");

class SlotMachine {
  coin: number

  constructor() {
    this.coin = 0;
  }
  
  counter () {
    return this.coin += 1;
  }

  randomBoolean () {
    return Math.random() >= 0.5;
  }

  randomRoulette () {
    return {
      rouletteOne: this.randomBoolean(),
      rouletteTwo: this.randomBoolean(),
      rouletteThree: this.randomBoolean(),
    }
  }

  play () {
    this.counter()
    const roulette = this.randomRoulette(); 

    if (!(roulette.rouletteOne && roulette.rouletteTwo && roulette.rouletteThree)) {
      return 'Good luck next time!!'
    } else {
      const message = `"Congratulations!!!. You won ${this.coin} coins!!`
      this.coin = 0;
      return message;
    }
  }
}

// * --> Consola
const run = new SlotMachine();
console.log(run.play())