
// unique characters
let chars = ["a","b","c","d","b"];
let unique =[];
for (let i = 0;i<chars.length;i++){
    if(!unique.includes(chars[i])){
        unique.push(chars[i]);
    }
}
console.log(unique);
