// Primes
const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Challenge

const isPrimesFaster = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

// Solucion 

const showPrimes = (from, to) => {
  for (let i = from; i <= to; i++) {
    !isPrimesFaster(i) ? console.log(`${i} is not a prime`) : console.log(`${i} is PRIME!`)
  }
}

showPrimes(1, 10)