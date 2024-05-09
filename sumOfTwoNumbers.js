function sumPairs(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magicNumber = Number(input[2]);
  let combinations = 0;

  let combinationFound = false;
  let combination = 0;

  for (let num1 = start; num1 <= end; num1++) {
    for (let num2 = start; num2 <= end; num2++) {
      combinations++;
      if (num1 + num2 === magicNumber) {
        combinationFound = true;
        combination = `${num1} + ${num2} = ${magicNumber}`;
        break;
      }
    }
    if (combinationFound) {
      break;
    }
  }

  if (combinationFound) {
    console.log(`Combination N:${combinations} (${combination})`);
  } else {
    console.log(`${combinations} combinations - neither equals ${magicNumber}`);
  }
}

sumPairs(["1", "10", "5"]); // Combination N:4 (1 + 4 = 5)
