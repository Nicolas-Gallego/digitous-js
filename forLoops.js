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
    } console.log(result1)
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


// WHILE 

// 01 Comptons
var start = 50
while (i < 201) {
    i++
    if (i >= 50 && i % 2 === 0) {
        console.log(i)
    }
}

// 02 Try again
var dice = null
var count = 0
while()


var box1 = 12;
var box2 = 5;
for (var i = 12; i < 14; i++) {
    box1 = box2;
    console.log(box1 + box2);
    box2 = box1 + i;
}
console.log(box1);
console.log(box2);
console.log(i);