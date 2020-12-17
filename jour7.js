// 01 - Alphabet
console.log("01 - Alphabet");
function sortLetters(string) {
    var arr = string.split('');
    var sorted = arr.sort();
    console.log(sorted.join(''));
}
sortLetters("Konexio");



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
        else if (x === o) {
            console.log("true");
        }
        else if (x !== o) {
            console.log("false");
        }
    }
}
countEach("xox");
countEach("xxxoooox");

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


