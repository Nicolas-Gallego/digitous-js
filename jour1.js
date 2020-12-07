// hello world
console.log("hello world !");

//string
var test = "My name is Nicolas"
console.log(test)

//concatenation
var name = "Nicolas"
console.log("Nice to meet you " + name)

//string length
var testlength = "I'm very long !"
console.log(testlength.length)

//replace
var food = "croissant is meh"
food = food.replace("meh", "so good")
console.log(food)

//up and down
var basic = "This is cool"
var basicUp = basic.toUpperCase()
var basicDown = basic.toLowerCase()
console.log(basic, basicUp, basicDown)

//split
var word = "banana"
var letters = word.split()
console.log(letters)

//template
var age = "27"
var template = `I'm ${age} years old`
console.log(template)