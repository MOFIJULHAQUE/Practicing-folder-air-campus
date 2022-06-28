let row = 4;
let column = 8;

for(let i=1; i<=row; i++){
    let star = '';
    for(let j=1; j<=column;j++){
        star += i + ' '
    }
    console.log(star);
}