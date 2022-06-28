let num = 5;
for (let i=1;i<=num;i++){
    stars = '';
    for(let j = 1; j<=num-i;j++){
        stars += ' ';
    }
    for(let k=1;k<=i;k++){
        stars += k
    }
    console.log(stars);
}

// Output:--

// 1
// 12
// 123
// 1234
// 12345
