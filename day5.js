//Activity 1
const prompt = require("prompt-sync")();
var num = prompt("enter the number")

function evenOdd(num){
    if(num%2==0)
        console.log("even")
    else
        console.log("odd")
}

evenOdd(num)

var num = prompt("enter the number")

function square(num){
    return num*num;
}

const sq = square(num);
console.log(sq);

//activity 2

var a = prompt("enter first number : ");
var b = prompt("ennter second number: ");

function maxi(a, b) {
  if (a > b) console.log(a, "is greater then ", b);
  else console.log(b, "is greater then ", a);
}

maxi(a,b);

var a = prompt("enter first name : ");
var b = prompt("ennter last name: ");

function concatinate(a,b)
{
    return a+b
}
var c = concatinate(a,b)
console.log(c);

//activity 3

var a = parseInt(prompt("enter first number : "));
var b = parseInt(prompt("ennter second number: "));

sum=(a,b) => a + b;
console.log(sum(a,b))

var st = prompt("enter the string")

specialCharacter=(a)=>{
    for(i=0;i<a.length;i++){
        if(a[i]==='!'||a[i]==='@' || a[i]==='#' || a[i] ==="$")
            return true;
    }
    return false;
}
console.log(specialCharacter(st))

//activity 4

var a =parseInt(prompt("Enter the number"))
sum2 = (a,b=5)=> a+b
console.log(sum2(a))

var person = prompt("Enter your name")
greeting=(person , age=10)=>{
    return "hi " + person +"! your age is " +age ;
}
console.log(greeting(person ));

//activity 5
var k = prompt("Enter the number");
function higherOrderFunction(callback, k) {
 
  console.log("Executing the higher order function...");

  for (i = 0; i < k; i++) {
    callback();
  }
}

function callbackFunction() {
    console.log("Executing the callback function...");
  }

higherOrderFunction(callbackFunction, k);

var num1 = parseInt(prompt("Enter the number"));

function higherOrderFunction(callbackFunctionOne , callbackFunctionTwo , k)
{
    console.log("higher order function")
    const result = callbackFunctionOne(k)
    console.log("result" , result)
}

function callbackFunctionTwo(k)
{
    k+=k;
    return k;
}

function callbackFunctionOne(k)
{
    k += k;
    console.log("k1" , k);
   return callbackFunctionTwo(k)
   
}



higherOrderFunction(callbackFunctionOne,callbackFunctionTwo,num1 );



