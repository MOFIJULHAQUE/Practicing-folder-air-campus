// using callback methodes by unique chars 
let chars = ["a","b","c","d","b"];
let unique = chars.filter((char,index)=>{
    return chars.indexOf(char) === index;
});

console.log(unique);