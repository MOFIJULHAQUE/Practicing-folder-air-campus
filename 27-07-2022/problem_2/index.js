//Given a string, return the string in reverse
function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse('aircampus'));
exports.reverse = reverse