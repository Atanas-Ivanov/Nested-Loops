function travelDestinations(input) {
  let index = 0;

  while (input[index] !== "End") {
    let destination = input[index];
    let budget = Number.parseInt(input[index + 1]);
    let moneySaved = 0;

    for (let i = index + 2; i < input.length; i++) {
      let currentSaved = Number.parseInt(input[i]);
      moneySaved += currentSaved;

      if (moneySaved >= budget) {
        console.log(`Going to ${destination}!`);
        index = i + 1; // Move to the next destination
        break;
      }
    }
  }
}

travelDestinations([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",
]);
