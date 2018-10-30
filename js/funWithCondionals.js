//Solve the following problems using Conditionals
console.log("fun with Condionals")
//1. Write a function that takes 2 parameters and displays the larger
function largerNum(num1, num2) {
  let num = (num1 > num2) ? num1 : num2;
  return num;
}
console.log("Larger Number")
largerNum(4, 3);
largerNum(1, 3);
//2. Write a function that will take in a number (1-100) return the letter grade for the student score
function grade(score) {
  let g = 'not graded';
  if (score >= 90) {
    g = 'a';
  } else if (score >= 80) {
    g = 'b';
  } else if (score >= 70) {
    g = 'c';
  } else if (score >= 60) {
    g = 'd';
  } else {
    g = 'f';
  }
  return g;
}
console.log('Grade')
grade(93);
grade(70);
grade(20);
grade("car");

//3. Write a function that will take in a number and return 'fever' if it indicates a fever (over 98.6) and additionally if the person should go to the hospital (over 103) 'fever go to hospital' (hint: try this with string concatenation), if it is under return 'no fever'
function fever(temp) {
  let f = 'fever'
  switch (true) {
    case (temp > 103):
      f += " got to hospital";
    case (temp > 98.6):
      return f;
    default:
      return "no " + f;
  }
}
console.log("Fever");
console.log(fever(99));
console.log(fever(96.5));
console.log(fever(110));


//4. Write a function that takes in a car object, if it is not moving then return true
let mycar = {
  make: "Ford",
  model: "Mustang",
  color: "Red",
  moving: false
}

function isStopped(car) {
  return !car.moving;
}
console.log("Is Stopped");
console.log(isStopped(mycar));


//5. Write a function that returns true if a dish is yours and is dirty, or false if one of the statements is false

let dish = {
  yourDish: true,
  isDirty: true
}

function washDish(dish) {
  return (dish.yourDish && dish.isDirty);
}
console.log('Wash your Dish');
console.log(washDish(dish));

//6. Flights from Boise. Write a function that will use the following data to return the cost of flights from boise to a neighboring city, by default return the standard cost unless firstClass is set to true

let flights = [{
  from: 'BOI',
  to: 'LAX',
  prices: {
    standard: 500,
    firstClass: 2200
  }
}, {
  from: 'BOI',
  to: 'SEA',
  prices: {
    standard: 800,
    firstClass: 1200
  }
}, {
  from: 'BOI',
  to: 'CAN',
  prices: {
    standard: 750,
    firstClass: 6200
  }
}]


function flightCost(destination, firstClass) {
  //***hint: use the find method***
  let x = (flights.find(function todestination(city) {
    return city.to == destination;
  })).prices;
  return (!firstClass) ? x.standard : x.firstClass;
}
console.log(flightCost('LAX', false));
console.log(flightCost('CAN', true));



// 7. Given a number 1-7 return the corresponding day of the week.
// allow a secondary argument to change the first day of the week to monday
let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function getDayOfWeek(n, offsetForMon) {
  let x = n + offsetForMon - 1;
  day[n];
}

function dayOfWeek(n) {
  day[n - 1];

}









///DO NOT MODIFY
// test.largerNum = largerNum
// test.grade = grade
// test.fever = fever
// test.isStopped = isStopped
// test.washDish = washDish
// test.flightCost = flightCost
// test.getDayOfWeek = getDayOfWeek