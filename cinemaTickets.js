function cinemaTickets(input) {
  let index = 0;
  let studentsTicketsCount = 0;
  let standardTicketsCount = 0;
  let kidsTicketsCount = 0;
  let totalTicketsCount = 0;

  while (index < input.length) {
    let movieName = input[index];
    index++;

    if (movieName === "Finish") {
      break;
    }

    let freeSpaces = Number(input[index]);
    index++;
    let spacesTaken = 0;

    while (index < input.length) {
      let ticketType = input[index];
      index++;

      if (ticketType === "End") {
        break;
      }

      spacesTaken++;
      totalTicketsCount++;

      if (ticketType === "student") {
        studentsTicketsCount++;
      } else if (ticketType === "standard") {
        standardTicketsCount++;
      } else if (ticketType === "kid") {
        kidsTicketsCount++;
      }

      if (spacesTaken === freeSpaces) {
        break;
      }
    }

    let spacesTakenPercent = ((spacesTaken / freeSpaces) * 100).toFixed(2);
    console.log(`${movieName} - ${spacesTakenPercent}% full.`);
  }

  let studentsTicketsPercent = (
    (studentsTicketsCount / totalTicketsCount) *
    100
  ).toFixed(2);
  let standardTicketsPercent = (
    (standardTicketsCount / totalTicketsCount) *
    100
  ).toFixed(2);
  let kidsTicketsPercent = (
    (kidsTicketsCount / totalTicketsCount) *
    100
  ).toFixed(2);

  console.log(`Total tickets: ${totalTicketsCount}`);
  console.log(`${studentsTicketsPercent}% student tickets.`);
  console.log(`${standardTicketsPercent}% standard tickets.`);
  console.log(`${kidsTicketsPercent}% kids tickets.`);
}

// Example input and output
cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
