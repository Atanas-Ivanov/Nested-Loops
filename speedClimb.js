function speedClimb(input) {
  let recordInSeconds = Number(input[0]);
  let distanceInMeters = Number(input[1]);
  let timeInSecondsPerMeter = Number(input[2]);
  let totalTimeNeededInSeconds = distanceInMeters * timeInSecondsPerMeter;
  let slowDownTime = (distanceInMeters / 50) * 30;
  let totalTime = totalTimeNeededInSeconds + slowDownTime;
  if (recordInSeconds < totalTime) {
    console.log(
      `No! He was ${(totalTime - recordInSeconds).toFixed(2)} seconds slower.`
    );
  } else {
    console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
  }
}
speedClimb(["10164", "1400", "25"]);
