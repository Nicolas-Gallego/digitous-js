// 01 - Format
function formatDate(string) {
    var date = new Date(string)
    console.log(`Nous sommes le : ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
}
formatDate("2020-12-16")

// 02 - Age
function calculateAge(string) {
    var date = new Date(string);
    var diff = date - Date.now();
    var age = new Date(diff);
    console.log("date :" + date);
    console.log("diff :" + diff);
    console.log("age :" + age);
    console.log((Math.abs(age.getUTCFullYear() - 1970)) - 1, "ans")
}
calculateAge("1993-01-22")

// 03 Validator
var prompt = require('prompt');
function checkProfil() {
    var profil = {
        properties: {
            username: {
                pattern: /^[a-zA-Z\s\-]+$/,
                message: 'Name must be only letters, spaces, or dashes',
                required: true,
            }
            password: {
                pattern: /^[a-zA-Z]+\d/,
                hidden: true,
                replace: '*',
                required: true
            },
            get password() {
                return this._password;
            },
            set password(value) {
                this._password = value;
            },
        }
    }
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  password: ' + result.password);
}
prompt.start();


checkProfil()