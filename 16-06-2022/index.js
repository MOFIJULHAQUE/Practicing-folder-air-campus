// Given a number determine if it positive or negative.
function is_positive(number){
    // write your code here
  
    // return the answer
    if( number > 0){
      return "positive";
    }else {
      return "negative";
    }
  }
  console.log(is_positive(-121));
  exports.is_positive = is_positive






//   Given two numbers return the largest number.
function largest(num1,num2){
    // write your code here
  
    // return the answer
    if ( num1 > num2){
      return num1;
    }else{
      return num2;
    }
  }
  console.log(largest(475,78));
  exports.largest = largest











//   You will be given two numbers, if their sum is in 50..80 (inclusive) then return 65 otherwise return 80.
function sum_range(num1,num2){
    // write your code here
  
    // return the answer
    let sum = num1 + num2;
    if ( sum >= 50 && sum <= 80){
      return 65;
    }else{
      return 80;
    }
  }
  console.log(sum_range(30,480));
  exports.sum_range = sum_range









//   Check if the given number is a multiple of 3 and 7.
function check(num1){
    // write your code here
  
    // return the answer
    if ( num1 % 3 == 0 && num1 % 7 == 0){
     return "yes";
    }else{
      return "no";
    }
  }
  console.log(check(21));
  exports.check = check











//   Given a number, determine whether it is odd or even.
function odd_even(num){
    // write your code here
  
    // return the answer
    if ( num %2 == 0){
     return "even";
      
    }else{
      return "odd";
    }
  }
  console.log(odd_even(54));
  exports.odd_even = odd_even

  










//   Write a JavaScript program to check if the two numbers are equal or not. If the two numbers are equal, return “Yeah!!” else “OOPS!”.
function equal_numbers(num1,num2){
    // write your code here
  if(num1 == num2){
    return "Yeah!!"
  }else{
    return "OOPS!";
  }
    // return the answer
  }
  console.log(equal_numbers(70,60));
  exports.equal_numbers = equal_numbers
  

  













//   Write a JavaScript code to check if the average salary of 5 employees is greater than 50000.
function average_salary(sal1,sal2,sal3,sal4,sal5){
    // write your code here
    // return the output
    let avg = (sal1+sal2+sal3+sal4+sal5)/5;
    if(avg > 50000){
      return "yes";
    }else{
      return "no";
    }
  }
  console.log(average_salary(10000,20000,30000,4000,5000));
  exports.average_salary = average_salary
















//   Write a program to check if the given number is multiple of 11 or not. If the given number is multiple of 11 then print the 3rd power of the number else return the number.
function check_11(num){
    // write your code here
  
    // return the answer
    if(num % 11 == 0){
      return num*num*num;
    }
    else{
      return num;
    }
  }
  console.log(check_11(11));
  exports.check_11 = check_11












//   Write a program to check the given 2 digit integer is equal to its reverse or not.
function reverse_equal(num){
    // write your code here
  
    // return the answer
    let x = num % 10;
    let y = Math.floor(num / 10);
    let z = x * 10 + y;
   if ( z == num ){
      return "yes";
   }else{
      return "no";
      }
    
    }
  console.log(reverse_equal(55));
  exports.reverse_equal = reverse_equal
