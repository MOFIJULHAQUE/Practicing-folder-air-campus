let num = 5;
for (let i=1;i<=num;i++){
    stars = '';
    for(let j = 1; j<=num-i;j++){
        stars += ' ';
    }
    for(let k=1;k<=i;k++){
        stars += k*2;
    }
    console.log(stars);
}

// Output:--

// 2
// 24
// 246
// 2468
// 246810


