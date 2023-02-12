const prompt = require("prompt-sync") ({sigint:true})
let x = prompt('enter the value x : ')
let y = prompt('enter the value y : ')
let z = prompt('enter the value z : ')

let temp 

temp = x 
x = y
y = z
z = temp 

console.log('the new value of x is : ', x)
console.log('the new value of y is : ', y)
console.log('the new value of z is : ', z)

var ticket = 20;
var age = prompt("enter the value of age: ")
if(age <= 16){
  console.log("bus ticket is " + (ticket/2))
}else{
  console.log("bus ticket is " + ticket)
}