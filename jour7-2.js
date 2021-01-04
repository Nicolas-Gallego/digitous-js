var fs = require("fs");

/*// 01 - File System
console.log("01 - File System")
fs.readFile("./jour7.txt", function (error, data) {
    console.log(error);
    console.log(data.toString())
})
console.log("----------") */

// 02 - Map Double
console.log("02 - Map Double");
var array = [1, 2, 3, 4, 5];
var double = array.map(function (num) {
    return num * 2;
})
console.log(double);
console.log("----------");

// 03 - Map Names
console.log("03 - Map Names");
var longNames = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
]
var shortNames = longNames.map(function (element) {
    return { name: element.firstName + " " + element.lastName }
})
console.log(shortNames);
console.log("----------");

// 04 - Filter Numbers
console.log("04 - Filter Numbers");
var array = [1, "toto", 34, "javascript", 8, -5]
var numbers = array.filter(function (element) {
    if (typeof element === "number") {
        return element
    }
})
console.log(numbers);
console.log("-----------");

// 05 - Filter Even
console.log("05 - Filter Even");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var even = numbers.filter(function (element) {
    if (element % 2 === 0) {
        return element
    }
})
console.log(even);
console.log("-----------");

// 06 - Cakes
console.log("06 - Cakes");
var cakes = [
    {
        name: "cake",
        flavor: "vanilla",
        status: "available"
    },
    {
        name: "brownie",
        flavor: "chocolate",
        status: "available"
    },
    {
        name: "pie",
        flavor: "strawberry",
        status: "available"
    },
    {
        name: "muffin",
        flavor: "pistachio",
        status: "available"
    },
    {
        name: "donut",
        flavor: "chocolate",
        status: "available"
    },
]
var dispo = cakes.filter(function (element) {
    if (element.flavor === "chocolate") {
        element.status = "sold out"
    return element
    }
    
})
console.log(dispo)