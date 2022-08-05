//Given a string, return the last 4 characters of the given string.

function lastFour(string) {
    return string.split('').slice(string.length - 4, string.length).join('');

}
console.log(lastFour('aircampus'));
exports.lastFour = lastFour

//output :- mpus