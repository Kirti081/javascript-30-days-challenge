const prompt = require("prompt-sync")();
//ACTIVITY 1
let x = 3;

if (x > 0) {
  console.log("positive");
} else if (x < 0) {
  console.log("negative");
} else {
  console.log("Zero");
}

var age = prompt("enter your age:");
console.log("age: ", age);

if (age >= 18) {
  console.log("eligible  for vote");
} else {
  console.log("Not eligible for vote");
}

//ACTIVITY 2
const a = 2;
const b = 9;
const c = -1;

if (a > b && a > c) {
  console.log(a, "is greater than other two");
} else if (b > c && b > a) {
  console.log(b, "is greater than other two");
} else {
  console.log(c, "is greater than other two");
}

//ACTIVITY 3
//taking 1 as Monday
var day = prompt("enter the day:");
day = (day % 7);

switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("Tueday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Satday");
    break;
  case 0:
    console.log("Sunday");
    break;
}

//Assign No. Out Of 100

const score = prompt("enter the score");
let grade;

switch(true) {
    case (score >= 90 && score <= 100):
        grade = "A";
        break;
    case (score >= 75 && score <= 89):
        grade = "B";
        break;
    case (score >= 60 && score <= 74):
        grade = "C";
        break;
    case (score >= 33 && score <= 59):
        grade = "D";
        break;
    case (score < 33):
        grade = "F";
        break;
    default:
        grade = "Invalid Case";
}

console.log(grade);

//Activity 4

var evenOdd = prompt("Enter the number");
{
  evenOdd % 2 === 0 ? console.log("Even Number") : console.log("Odd Number");
}


//ACTIVITY 5: 
var year = prompt("enter the year")

if(year%4===0)
{
    if(year%100===0)
    {
        if(year%400===0)
            console.log(true)
        console.log(false)
    }
    console.log(true)
}
else{
    console.log(false)
}