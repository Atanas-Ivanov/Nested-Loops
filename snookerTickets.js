function snookerTickets(input) {
  let typeOfFInal = input[0];
  let typeTicket = input[1];
  let ticketCount = Number(input[2]);
  let pictureTrophy = input[3];
  let ticketPrice = 0;

  if (typeOfFInal === "Quarter final") {
    if (typeTicket === "Standard") {
      ticketPrice = 55.5;
    } else if (typeTicket === "Premium") {
      ticketPrice = 105.2;
    } else if (typeTicket === "VIP") {
      ticketPrice = 118.9;
    }
  } else if (typeOfFInal === "Semi final") {
    if (typeTicket === "Standard") {
      ticketPrice = 75.88;
    } else if (typeTicket === "Premium") {
      ticketPrice = 125.22;
    } else if (typeTicket === "VIP") {
      ticketPrice = 300.4;
    }
  } else if (typeOfFInal === "Final") {
    if (typeTicket === "Standard") {
      ticketPrice = 110.1;
    } else if (typeTicket === "Premium") {
      ticketPrice = 160.66;
    } else if (typeTicket === "VIP") {
      ticketPrice = 400;
    }
  }
  let totalPrice = ticketCount * ticketPrice;

  if (totalPrice > 4000) {
    totalPrice *= 0.75;
  } else if (totalPrice > 2500) {
    totalPrice *= 0.9;
    if (pictureTrophy === "Y") {
      ticketCount *= 40;
      totalPrice += ticketCount;
    }
  } else {
    if (pictureTrophy === "Y") {
      ticketCount *= 40;
      totalPrice += ticketCount;
    }
  }
  console.log(totalPrice.toFixed(2));
}
snookerTickets(["Quarter final", "Standard", "11", "N"]);
