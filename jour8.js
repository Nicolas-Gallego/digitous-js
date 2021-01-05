var request = require('request')


/*// 01 Countries
var coutriesNames = []
console.log("--------01 - Countries--------")
request.get("https://restcountries.eu/rest/v1/all", function (err, response, body) {
    console.log(err);
    console.log(response.statusCode);
    var coutriesNames = JSON.parse(body)
    for (i = 0; i < coutriesNames.length; i++)
        console.log(coutriesNames[i].name)
})
*/



// 02 - Chuck Norris
function getFact() {
    request.get("https://api.chucknorris.io/jokes/random", function (err, res, body) {
        var joke = JSON.parse(body);
        var value = joke.value;
        console.log(value);
    })
}
getFact()

// 03 - Pokemon
function catchPokemon(number) {
    request.get(`https://pokeapi.co/api/v2/pokemon/${number}`, function (err, res, body) {
        var pokemon = JSON.parse(body);
        console.log(pokemon.id)
        console.log(pokemon.name)
    })
}
catchPokemon()