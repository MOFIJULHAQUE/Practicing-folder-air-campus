let a =5;
let b = 7;
for(let i=1; i<4; i++){
    let star = '';
    for(let j =1; j<=i; j++){
        star+= a+" ";
        let c = a + b;
        a=b;
        b=c;
    }
    console.log(star);
}




// output
// 5
// 7 12
// 19 31 50
// 81 131 212 343
