//Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.
function anagram(str1, str2) {
    if (str1.split('').sort().join('') === str2.split('').sort().join('')) {
        return true;
    } else {
        return false;
    }
}
console.log(anagram('elbow',
    'below'));
exports.anagram = anagram

