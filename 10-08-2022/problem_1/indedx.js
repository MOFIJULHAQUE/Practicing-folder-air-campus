
// anagram(not clear)
// find frequency of letters

let word1='god';
let word2 = 'ogd';

if(word1.split('').sort().join('') == word2.split('').sort().join('')){
    console.log('anagram');

}else{
    console.log('not anagram');

}

