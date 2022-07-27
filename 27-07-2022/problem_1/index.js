// Given a string, if it is a palindrome return true else return false.
function palindrome(str) {
    let a = str.split('').reverse().join('');
    if (a === str) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrome('aror7a'));
exports.palindrome = palindrome