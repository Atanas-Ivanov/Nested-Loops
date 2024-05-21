function trainTheTrainers(input) {
  let juryPeopleCount = Number(input[0]);
  let index = 1;
  let totalAverageGrade = 0;
  let presentationsCount = 0;

  while (index < input.length) {
    let taskName = input[index];
    if (taskName === "Finish") {
      break;
    }

    index++;
    let presentationTotalGrade = 0;
    for (let i = 0; i < juryPeopleCount; i++) {
      let taskGrade = Number(input[index]);
      presentationTotalGrade += taskGrade;
      index++;
    }

    let presentationAverageGrade = presentationTotalGrade / juryPeopleCount;
    console.log(`${taskName} - ${presentationAverageGrade.toFixed(2)}.`);

    totalAverageGrade += presentationAverageGrade;
    presentationsCount++;
  }

  let overallAverageGrade = totalAverageGrade / presentationsCount;
  console.log(
    `Student's final assessment is ${overallAverageGrade.toFixed(2)}.`
  );
}

// Example input and output
trainTheTrainers([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
