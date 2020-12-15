var prompt = require("prompt");
prompt.start();
var min = 1;
var max = 100;
var mysteryNum = Math.floor(Math.random() * (max - min + 1) + min);
console.log(`le numero mystère est ${mysteryNum}`)
function play() {
    var schema = {
        properties: {
            number: {
                pattern: /^[0-9]+$/,
                message: 'Le nombre doit etre un nombre',
                required: true
            },
        }
    };
    prompt.get(schema, function (err, result) {
        console.log(result)
        if (mysteryNum > result.number){
            console.log("C'est plus !")
        }
        else if (mysteryNum < result.number){
            console.log("C'est moins !")
        }
        else {
            console.log("BRAVO !")
        }
    })
}
play()