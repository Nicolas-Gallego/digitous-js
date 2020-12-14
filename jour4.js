// 01 - Object
var cat = {
    name: "Garfiel",
    age: 3,
    isCute: true,
}
if (cat.isCute) {
    console.log("So cute !")
}


// 02 - Combine
var cat2 = {
    name: "John",
    age: 5,
    isCute: false,
}

var cats = [cat, cat2]
console.log(cat.age)
console.log(cat2.isCute)


// 03 - Even
function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("Even")
    }
    else {
        console.log("odd")
    }
}

checkIfEven(1000)
checkIfEven(34)
checkIfEven(6597)
checkIfEven(0991)


// 04 - Compare
function compare(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is bigger`)
    }
    else if (num2 > num1) {
        console.log(`${num2} is bigger`)
    }
    else {
        console.log(`Both are the same`)
    }
}
compare(2, 1)
compare(2, 10)
compare(2, 2)


// 05 - Add Up
var result = 0
function addUp(num) {
    for (var i = 1; i <= num; i++)
        result += i
    console.log(result)
}
addUp(12)


// 06 - Time
function format(num) {
    var hrs = Math.floor(num / 3600);
    var mins = Math.floor((num % 3600) / 60);
    var secs = Math.floor(num % 60);
    console.log(`${hrs}:${mins}:${secs}`)
}
format(3700)