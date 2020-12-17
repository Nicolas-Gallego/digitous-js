// 01 - Alphabet
console.log("01 - Alphabet");
function sortLetters(string) {
    var arr = string.split('');
    var sorted = arr.sort();
    console.log(sorted.join(''));
}
sortLetters("Konexio");
console.log("-------------------")


// 02 - XOXO
console.log("02 - XOXO");
function countEach(string) {
    console.log(`Autant de O que de X dans ${string} ?`);
    var x = 0;
    var o = 0;
    var stringlength = string.length;
    for (var i = 0; i <= stringlength; i++) {
        if (string.charAt(i) === "x") {
            x += 1;
        }
        else if (string.charAt(i) === "o") {
            o += 1;
        }
    }
    if (x === o) {
        console.log("true");
    }
    else if (x !== o) {
        console.log("false");
    }
}
countEach("xox");
countEach("xxxoooox");
console.log("-------------------")
// 03 - Palindrome
console.log("03 - Palindrome");

function checkPal(string) {
    console.log(`Est-ce que \"${string}\” est un palindrome ?`);
    var lowedStr = string.toLowerCase();
    var reverseStr = lowedStr.split('').reverse().join('');
    if (reverseStr === lowedStr) {
        console.log("Palindrome !");
    }
    else {
        console.log("Nope");
    }
}
checkPal("raceCar");
checkPal("laptop");
checkPal("unDroleDeLordNu");
console.log("-------------------")
// 04 - Swap
console.log("04 - Swap");

function swap(string) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === string[i].toLowerCase()) {
            newString += string[i].toUpperCase();
        } else {
            newString += string[i].toLowerCase();
        }
    }
    console.log(newString);
}
swap("Hello World");
swap("Google Is My Friend !");
console.log("-------------------")
// Bonus 
console.log("Bonus");

function makeItSpongeBob(string) {
    var lowCaseStr = string.toLowerCase().split('');
    for (var i = 0; i < lowCaseStr.length; i += 2) {
        lowCaseStr[i] = lowCaseStr[i].toUpperCase();
    }
    console.log(lowCaseStr.join(''))
};
makeItSpongeBob("Javascript is easy")
console.log("-------------------")
// Bonus II
console.log("Bonus II")
function compare(a, b) {
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
    return 0;
}
function sortLetters2(string) {
    var arr = string.split('');
    var sorted = arr.sort(compare);
    console.log(sorted.join(''));
}
sortLetters2("Konexio");
console.log("-------------------")
// Bonus III
console.log("Bonus III")

function countEach2(string) {
    console.log(`Autant de O que de X dans ${string} ?`);
    var x = 0;
    var o = 0;
    var stringlength = string.length;
    for (var i = 0; i <= stringlength; i++) {

        if (string.charAt(i) === "x") {
            x += 1;
        }
        else if (string.charAt(i) === "o") {
            o += 1;
        }
    }
    if (x + o !== stringlength){
        console.log("Utiliser que des x ou des o")
    }
    else if (x === 0 && o === 0) {
        console.log("Utiliser que des x ou des o")
    }
    else if (x === o) {
        console.log("true");
    }
    else if (x !== o) {
        console.log("false");
    }
}
countEach2("xoxo");



