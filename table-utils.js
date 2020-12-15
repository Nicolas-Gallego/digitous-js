function multiply(num) {
    var resultx = 0
    for (var i = 1; i <= 10; i++) {
        resultx = num * i;
        console.log(`${num} x ${i} = ${resultx}`)
    }
}
var result = 0
function adition(num1, num2) {
    var result = num1 + num2
    console.log(`${num1} + ${num2} = ${result}`)
}
module.exports = { multiply, adition }