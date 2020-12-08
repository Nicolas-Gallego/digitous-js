// Number
var integer = 102;
var float = 13.9;
console.log(integer, float);

// Convert
var basic = 34;
var stringified = basic.toString();
console.log(stringified);
console.log(stringified.length);

// Round
var num = 1.5;
var rounded = Math.round(1.5);
console.log(rounded);

// Arithmétique
var test = 12;
var bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test ** bis);
console.log(test % bis);

// Comparaison
var test = 143;
var bis = 219;
console.log(test > bis);
console.log(test >= bis);
console.log(test < bis);
console.log(test <= bis);
console.log(test == bis);
console.log(test === bis);
console.log(test != bis);
console.log(test !== bis);

// Condition
var limit = 50
var score = 6
if (score >= limit) {
    console.log("Ok good !")
} else {
    console.log("Oh noooo...")
}

// Condition II
var password = "azert";
if (password.length > 5) {
    console.log("The password is secured");
}

// Condition III
if (score >= limit && password.length > 5) {
    console.log("Everything is good")
} else if (score >= limit || password.length > 5) {
    console.log("Something is good")
} else {
    console.log("Nothing is good")
}

// Bonus
var min = 1
var max = 6
var random = Math.floor(Math.random() * (max - min + 1) + min)
console.log(random)
if (random === 6) {
    console.log("Yes I win !")
} else {
    console.log("So close...")
}

// Bonus II
var month = "March"

switch (month) {
    case "January":
    case "February":
    case "March":
        console.log("Winter");
        break;
    case "April":
    case "May":
    case "June":
        console.log("Spring");
        break;
    case "July":
    case "August":
    case "September":
        console.log("Summer");
        break;
    case "October":
    case "November":
    case "December":
        console.log("Fall");
        break;
}

// Bonus III
var roundedNumber = 3.3
var decimal = (roundedNumber - Math.floor(roundedNumber))
if (decimal >= 0.5) {
    console.log(Math.ceil(roundedNumber))
} else {
    console.log(Math.floor(roundedNumber))

}