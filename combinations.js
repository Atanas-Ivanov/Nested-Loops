function combinations(input) {
  let wantedResult = Number(input[0]);
  let validCount = 0;

  for (let n1 = 0; n1 <= wantedResult; n1++) {
    for (let n2 = 0; n2 <= wantedResult; n2++) {
      for (let n3 = 0; n3 <= wantedResult; n3++) {
        if (n1 + n2 + n3 === wantedResult) {
          validCount++;
        }
      }
    }
  }
  console.log(validCount);
}
combinations(["25"]);
