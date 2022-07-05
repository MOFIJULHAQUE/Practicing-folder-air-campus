// find special number
function specialNumber(n){
    if(n==0){
        return "NO";
    }
    let originalNumber = n;
    let sum = 0;
    while(n>0){
        let digit = n % 10;
        sum+=getFact(digit);
        n = Math.floor(n / 10);
    }
    if(originalNumber==sum){
        return "YES";
    }else{
        return "NO";
    }

    function getFact(x){
        let fact=1;
        for(let i=2;i<=n;i++){
            fact*=i;
        }
        return fact;
    }

}
console.log(specialNumber(145));
exports.specialNumber=specialNumber;