function multiply(num) {
    var resultx = 0
    for (var i = 1; i <= 10; i++) {
        resultx = num * i;
        console.log(`${num} x ${i} = ${resultx}`)
    }
}
console.log(process.argv)
multiply(process.argv[2])