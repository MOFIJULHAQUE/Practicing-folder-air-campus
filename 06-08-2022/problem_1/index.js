//Given a string and two index values, return the string from the start index to end index.
function substring(str, a, b) {
    return str.slice(a, b);
}
console.log(substring('aircampus', 3, 9));
exports.substring = substring



// output
// campus