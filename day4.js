//Activity 1
const prompt = require("prompt-sync")();
for( i = 1;i<=10;i++)
{
    console.log(i);
}

for(i=1;i<=10;i++){
    console.log(5*i)
}

//Activity 2
var sum = 0
var i = 0
while(i<=10)
{
    sum += i;
    i++;
}
console.log(sum)

var i= 10
while(i>0){
    console.log(i)
    i--;
}

//Activity 3

var i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

var num= prompt("enter the number")
var fact = 1;
var i =1

do{
    fact=fact*i
    i++;
}while(i<=num)
console.log(fact);

// Activity 4

for(i=0;i<5;i++)
{
    var sum = "*"
    for(j=0 ;j<i;j++)
        sum = sum + "*";
    console.log(sum)
}

//Activity 5

for(i=1;i<=10;i++)
{
    if(i==5)
        continue;
    console.log(i);
}

for (i = 1; i <= 10; i++) {
  if (i == 7) break;
  console.log(i);
}
