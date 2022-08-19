
// find Mango without includes methods

// with includes methodes
let nme = 'Mango is sweet. Watermelon is also sweet';
let target = 'Mango';

console.log(name.includes(target));


// without includes methodes
let newArr = nme.split(' ');

let isPresent = false;

for(let i=0;i<newArr.length;i++){
    if(newArr[i] === target){
    isPresent = true;

    }
}

console.log(isPresent);



