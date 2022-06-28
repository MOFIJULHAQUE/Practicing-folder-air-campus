
for(let i=1;i<=5;i++){
    let stars = '';
    for(let j=1; j<=5; j++){
        if(i==1 || i==5 || j==1 || j==5){
            stars+= '* '
        }else{
            stars+='  '
        }
    }
    console.log(stars);
}


// Output:--

// * * * * * 
// *       * 
// *       *
// *       *
// * * * * *