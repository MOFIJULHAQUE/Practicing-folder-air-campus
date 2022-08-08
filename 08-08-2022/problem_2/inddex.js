// Given a string, replace all the occurrences of Ram with Shyam
function ramShyam(str) {
    return str.replaceAll("Ram", "Shyam");
}
console.log(ramShyam('Ram owns a dog. Ram likes animals'));
exports.ramShyam = ramShyam



// output :- Shyam owns a dog. Shyam likes animals