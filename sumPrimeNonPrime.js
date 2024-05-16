function sumPrimesAndNonPrimes(input) {
  let index = 0;
  let command = input[index];
  index++;
  let sumPrimeNum = 0;
  let sumNonPrimeNum = 0;

  while (command !== "stop") {
    let num = Number(command);
    if (num < 0) {
      console.log("Number is negative.");
      command = input[index];
      index++;
      continue;
    }
    let isPrime = true;

    for (let divider = 2; divider < num; divider++) {
      if (num % divider === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      sumPrimeNum += num;
    } else {
      sumNonPrimeNum += num;
    }
    command = input[index];
    index++;
  }
  console.log(`Sum of all prime numbers is: ${sumPrimeNum}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPrimeNum}`);
}

sumPrimesAndNonPrimes(["0", "-9", "0", "stop"]);
