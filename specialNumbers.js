function specialNumbers(input) {
  let N = Number(input[0]);
  let num = 1111; // Starting number
  let specialNumbers = [];

  while (num <= 9999) {
    let numStr = num.toString();
    let isSpecial = true;

    for (let i = 0; i < numStr.length; i++) {
      let digit = Number(numStr[i]);

      // If any digit is 0 or N is not divisible by the digit, it's not a special number
      if (digit === 0 || N % digit !== 0) {
        isSpecial = false;
        break;
      }
    }

    if (isSpecial) {
      specialNumbers.push(num);
    }

    num++; // Move to the next number
  }

  console.log(specialNumbers.join(" "));
}

// Example input
specialNumbers(["3"]);
