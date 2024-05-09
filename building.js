function building(input) {
  let floorCount = Number(input[0]);
  let roomsCount = Number(input[1]);
  for (let i = floorCount; i > 0; i--) {
    let buff = "";
    for (let x = 0; x < roomsCount; x++) {
      if (i === floorCount) {
        buff += `L${i}${x} `;
      } else if (i % 2 === 0) {
        buff += `O${i}${x} `;
      } else {
        buff += `A${i}${x} `;
      }
    }
    console.log(buff);
  }
}
building(["6", "4"]);
