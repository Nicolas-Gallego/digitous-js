function calculate(number1, operator, number2) {
    var num1 = parseInt(number1)
    var num2 = parseInt(number2)
    if (operator === "+") {
        return num1 + num2;
    }
    if (operator === "-") {
        return num1 - num2;
    }
    if (operator === "x") {
        return num1 * num2;
    }
    if (operator === "/") {
        return num1 / num2;
    }
}
console.log(calculate(process.argv[2], process.argv[3], process.argv[4]));

