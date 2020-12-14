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

// Bonus 
function generatePassword(num) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for (var i = 0; i < num; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    if (result.length > 15 || result.length < 6) {
        console.log("error")
    }
    else {
        console.log(result)
    }
}
generatePassword(14)


// Bonus II
var joueur1 = 0
var joueur2 = 0
function launchDice(numberOfDice) {
    var somme = 0
    var max = 6;
    var min = 1;
    for (var i = 1; i <= numberOfDice; i++) {
        var random = Math.floor(Math.random() * (max - min + 1) + min)
        somme += random;
    }
    console.log(somme);
    return somme
}

var joueur1 = launchDice(5)
var joueur2 = launchDice(5)
//console.log(joueur1 > joueur2 ? "Joueur 1" : "Joueur 2" + " a gagné"); N'affiche pas "à gagné" si le joueur 1 l'emporte
if (joueur1 > joueur2) {
    console.log(`Le joueur 1 gagne avec ${joueur1} points contre ${joueur2}`)
}
else if (joueur1 < joueur2) {
    console.log(`Le joueur 2 gagne avec ${joueur2} points contre ${joueur1}`)
}

else{
    console.log(`Les deux joueurs ont fait égalité ${joueur1} - ${joueur2} ! Quelles sont les chances pour une chose pareil arrive ?!`)
}


