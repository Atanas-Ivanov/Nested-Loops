function oscars(input) {
  let rent = Number(input[0]);
  let rewardsExpenses = rent - rent * 0.3;
  let foodExpenses = rewardsExpenses - rewardsExpenses * 0.15;
  let soundExpenses = foodExpenses / 2;
  let finalPrice = rewardsExpenses + foodExpenses + soundExpenses;
  console.log((finalPrice + rent).toFixed(2));
}
oscars(["5555"]);
