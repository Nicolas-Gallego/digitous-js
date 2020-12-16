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
    console.log("diff :" +diff);
    console.log("age :" + age);
    console.log((Math.abs(age.getUTCFullYear() - 1970)) -1, "ans")
}
calculateAge("1993-01-22")

// 03 