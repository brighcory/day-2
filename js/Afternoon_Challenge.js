//1. Write a function that returns true if the number is even (remember modulus)
function even(num) {
  return (num % 2) == 0;
}

//2. Write a function that will determine if a car is speeding given the arguments for carSpeed and speedLimit, return a string if it is 'under the speed limit', 'at the speed limit', or 'over the speed limit'.
function carSpeeding(carSpeed, speedLimit) {
  let x = (carSpeed < speedLimit) ? 'under ' : (carSpeed > speedLimit) ? 'over ' : 'at ';
  return x + 'the speed limit'
}

//3. Write a function that given a bird will return true if it is flightless: 
let bird = {
  name: "penguin",
  wings: true,
  canFly: false
}
function flightless(birdType) {
  return !birdType.canFly;
}

//4. Write a function that will determine if a user has a premium account and isSubscribed, return true if both are true.

let user = {
  premium: true,
  isSubscribed: false
}

function account(user) {
  return user.premium && user.isSubscribed;
}
//5. Write a function that given a number of weeks it will return how many days they contain, have it take in a second parameter that will be true if it only counts buisness days.
function daysFromWeeks(weeksNum, buisnessOnly) {
  return (buisnessOnly) ? weeksNum * 5 : weeksNum * 7;
}