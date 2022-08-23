
// reverse the sentence each word in the same order
let news = "Mofijul is a web developer";

let newArr = news.split(" ");
console.log(newArr);

for(let i=0; i< newArr.length; i++){
    newArr[i] = newArr[i].split("").reverse().join("");
}
console.log(newArr.join(" "));
// output
// lujifoM si a bew repoleved
