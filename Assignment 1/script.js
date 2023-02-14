/*
    Assignment1
    Date: 2/14/23
    Author: Raquel Rodriguez
*/

let someMonth;

function theMonth() {
  let currentMonth;
  let summerMonth;
  let myLibraryFunction;
}

const numericLiteral = 123;
const stringLiteral = "hello";
const booleanLiteral = true;
const nullLiteral = null;

const complexExpression = 2 + 3;

let firstName, lastName;
let address;
let city;
let state;
let zipCode;
let yourAge;
let referralSource;
let mayWeContactYou;

firstName = "John";
lastName = "Doe";
yourAge = 30;

const fullName = firstName + " " + lastName;

const person = {firstName: "John", lastName: "Doe", yourAge: 30};
({firstName, lastName, yourAge} = person);

let x = 5;
let y = "10";
console.log(x + Number(y)); // 15

x = true;
y = "hello";
console.log(String(x) + y); // "truehello"

let a = 10;
let b = true;
console.log(a + Number(b)); // 11

const nullValue = null;
console.log(nullValue); // null

let undefinedValue;
console.log(undefinedValue); // undefined

console.log(typeof 123); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof undefined); // "undefined"

name = "Zak Ruvalcaba";
alert("Hello " + name + ", welcome to the JavaScript class!");

name = "Zak Ruvalcaba";
course = "JavaScript";
alert("Hello " + name + ".\nWelcome to the " + course + " class!");

name = prompt("What's your name?");
course = prompt("What class are you taking?");
alert("Hello " + name + ".\nWelcome to the " + course + " class!");

x = 10;
y = 20;
console.log(x + y); // 30

x = 20;
x += 20;
console.log(x); // 40

x = 20;
x *= 5;
console.log(x); // 100

x = 20 % 3;
x /= 1;
console.log(x); // 2

x = 10;
y = 20;
z = 30;
console.log((x + y > z) && (x * 2 < y)); // false

x = 10;
y = 20;
z = 30;
console.log((x + y < z) || (x * 2 > y)); // true


