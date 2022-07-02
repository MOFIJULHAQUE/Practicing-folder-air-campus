
for(let i=1;i<=5;i++){
    let stars = '';
    for(let j=1; j<=6; j++){
        if(i==1  || i==5 || i==2 || 
i==4 || j==1 || j==6){
            stars+= '8 '
        }else{
            stars+='  '
        }
    }
    console.log(stars);
}
