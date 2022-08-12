
// using callback methodes find duplicate char
let chars = ["a","b","c","d","b"];
let unique = chars.filter((char,index)=>{
    return chars.indexOf(char) !== index;
});

console.log(unique);
//output
// [ 'b' ]
