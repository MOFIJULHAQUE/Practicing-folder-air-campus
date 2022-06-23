//factorial using recursion
function facto(num,fact){
    if(num > 0){
        fact *= num;
        return(facto(num-1,fact));
    }else{
        return fact;
    }
}
console.log(facto(6,1));