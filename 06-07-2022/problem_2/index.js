for(let i=1;i<=5;i++){
    let star=""
    for(let j=1;j<=5;j++){
        if(i<=j){

            star+=j+" ";
        }
    }
    for(let j=1;j<=5;j++){
        if(i>j){

            star+=j+" ";
        }
    }
    console.log(star);
}

// output
// 1 2 3 4 5 
// 2 3 4 5 1 
// 3 4 5 1 2 
// 4 5 1 2 3 
// 5 1 2 3 4 