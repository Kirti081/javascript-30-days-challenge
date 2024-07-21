//Activity 1
const prompt = require("prompt-sync")();
const arr = [1,2,3,4,5]
const arr1 = ["kirti", "sharma", 1, 2, 3];
console.log(arr1)

var firEle = arr1[0]
var lastEle = arr1[arr1.length-1]

console.log("First Element: " , firEle , "Last Element : " , lastEle)

//activity 2

var num1 = parseInt(prompt("Enter the number"))
arr1.push(num1)

console.log(arr1);

arr1.pop()
console.log(arr1);

arr1.shift()
console.log(arr1);

arr1.unshift("shilpi" , "sharma")
console.log(arr1);

//activity 3

var arr3=[];
arr.map((x)=>{
    x=x*x
    arr3.push(x)
})
console.log(arr3);

var arr4 = []

arr3.filter((x)=>{
    if(x%2==0)
        arr4.push(x)
})

console.log(arr4);

const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );

  console.log(sumWithInitial)

  for(x of arr1){
    console.log(x);
  }

arr1.forEach((ele) => console.log(ele));

//activity5
var row= parseInt(prompt("enter number of row"))
var col = parseInt(prompt("enter number of col"))
var k=[]

for(i=0;i<row;i++)
{
    k[i] = [];
    for(j=0;j<col;j++)
    {
        k[i][j] = i+j;
    }
}
console.log(k)
