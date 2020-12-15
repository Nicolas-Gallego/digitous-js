function multiply(num) {
    var result = 0
    for (var i = 1; i <= 10; i++) {
        result = num * i;
        console.log(result)
    }
}

function adition(num1, num2) {
    console.log(num1 + num2)
}
module.exports = { multiply, adition }