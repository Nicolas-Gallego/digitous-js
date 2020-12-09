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
var total = 0
var limit = 10
for (var total; total <= limit; total++) {
    console.log(total)
}

// 06 - Reverse
var sentence = "Hello Konexio !"
for ()