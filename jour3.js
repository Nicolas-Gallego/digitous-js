// 01 - Array
var fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);

// 02 - Access
var ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

// 03 - Add and Remove
var objects = ["pen", "book", "lamp"];
objects.unshift("chair");
objects.pop();
objects.push("laptop");
objects.shift()
console.log(objects);

// 04 - Order
var numbers = [4, 10, 8, 12, 6]
numbers.reverse();
numbers.sort((a, b) => a - b);
console.log(numbers);

// 05 - Boucle
var total = 0;
var limit = 10;
for (var i = 1; i <= limit; i++) {
    total += i;
}
console.log(total)

// 06 - Reverse
var sentence = "Hello Konexio !"
var reverseStr =""
for(var i = sentence.length -1; i >= 0; i--){
reverseStr += sentence[i]
}
console.log(reverseStr)

// Bonus
for (i=1; i <= 100; i++){
    if( i % 3 == 0 ){
        console.log("fizz")
    }
    if( i % 5 == 0 ){
        console.log("buzz")
    }
    if( ( i % 3 != 0 ) && ( i % 5 != 0 ) ){
        console.log("fizzbuzz")
    }
    if( i % 7 != 0 ){
    console.log("")
    }
    if( i % 2, 4, 6, 8, 9 != 0){
        console.log(i)
    }
}

