// Take a number and find the "ans" by sum of sqaure of digits. once you find this "ans" repeat the steps ( I mean find sum of square of digits of ans) and repeat this process until you get 1.
function checkNumber(n){
    let sum=0;
     while(n>0){
       let rem = n%10;
       sum = sum + rem**2;
       n = Math.floor(n/10);
     }
     return sum;
   }
   console.log(checkNumber(44789));
   exports.checkNumber = checkNumber
   
   
   