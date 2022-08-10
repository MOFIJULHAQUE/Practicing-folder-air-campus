

// count total number of 'a'

let word = ' Mofijul Haqaaue';
let target = 'a';
let count = 0;

for(let i=0;i<word.length;i++){
    if(word[i] === target){
        count += 1;
    }
}
console.log(count)
