// 01 Sommes des carrés
var total = 0
var result = 0
for (var i = 5; i <= 10; i++) {
    result = i * i
    total += result
} console.log(total)

// 02 Comptons
var multiple = 0
var result1 = 0
for (i = 100; i <= 1000; i++) {
    if (i % 7 === 0) {
    }console.log(result1)
}

// 03 Chanceux
var min = 1;
var max = 6;
var dice = null
var random = null
for (var i = 1; i <= 20; i++) {
    console.log(random = Math.floor(Math.random() * (max - min + 1) + min))
    if (random >= 5) {
        dice += random
    }
} console.log(dice)



