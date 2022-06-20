// Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range):
// -> Numbers should be even
// -> Second last digit of number is 4
function product(a,b){
    let multiply = 1;
  for ( let i = a; i<=b; i++){
      let x = Math.floor(i/10);
      if ( i % 2 == 0 && x %10 == 4){
          multiply *= i;
      }
  }
  if ( multiply == 1){
      return 0;
  }else{
      return multiply;
  }
  }
  console.log(product(10,20));
  exports.product = product
  
  
  