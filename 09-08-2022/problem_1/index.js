//  power of a number    (without recursion)
function getPower(base,exponential){
    if(exponential<0) return -1;
    if(exponential === 0)return 1;
    let total = 1;
    for(let i=0;i<exponential;i++){
        total*=base;
    }
    return total;
}
console.log(getPower(2,7));
