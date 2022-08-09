
//topic =>>>>>>> recursion
function getPower(base,exponential){
    if (exponential === 0) return 1;

    return base * getPower(base , exponential - 1);

}
console.log(getPower(2,4));
