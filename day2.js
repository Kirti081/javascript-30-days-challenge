var a = 5
var b = 11
console.log(a+b)
console.log(b-a)
console.log(a*b)
console.log(b/a)
console.log(b%a)

a += b
console.log(a)
b -= a
console.log(b)

if(a>b)
    console.log(a)
else
    console.log(b)

var c = 10
var d = 12
if( c >= d)
    console.log(c)
else
    console.log(d)

var st = 5
var x = "5"

if(st == x){
    console.log("yes")
    console.log(true)}
else{
    console.log("no")
    console.log(false)
}
if(st === x)
    console.log(true)
else{
    console.log("no")
    console.log(false)
}


var y = a && b
console.log(y)

var q = a || b
console.log(q)

