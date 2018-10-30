// Truthy
//   String with contents
//   Objects

let me = {
  username: 'coryb',
  email: 'corybrighton01@gmail.com',
  formal: 'Mr.',
  name: 'cory'
}

function greet(user) {

  if (user.formal)
    console.log(`hello ${me.name}`);
}

greet(me);

function dayFromNum(num) {
  let day = 'Day not found in range';
  switch (num) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
  }
  return day;
}

function dayArray(num) {
  if (num <= 6 && num > -1) {

    let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return day[num];
  } else {
    return "Invalid day"
  }
}