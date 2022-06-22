// Hey can you really chose the government, really? Lets find out.

// You will be given day, month, year of birth You will also be given election day, month and year

// You are only allowed to vote if following condotions are fulfilled.

// your age should be greater than 20 years,6 months, 11 days return "I can vote"

// if your age is greater than 50 years 8 months 12 days and less than 70 years 5 months and 11 days than you can return "I cannot walk so cannot vote please make an app to vote"

// if election date is your birthday than you will recieve a "iphone" if you are eligible for vote. return "I received an iphone"

// if age is greater than 70 years 5 months and 11 days return "I will watch naruto rather than voting"

// Input: All input are given as function parameter

function eligible(
    birth_day, birth_month, birth_year,
    election_day, election_month, 
    election_year
  ){
  let year = election_year - birth_year;
  if(year > 20 && year <= 50 ){
    return "I can vote";
  }else if ( year > 50 && year <= 70){
    return  "I cannot walk so cannot vote please make an app to vote";
  }
  else if(year > 70 ){
    return  "I will watch naruto rather than voting";
  }else if( election_day == birth_day && election_month == birth_month ){
    return "I received an iphone";
  }
    
    // code here
  }
  console.log(eligible(10,5,1950,11,6,2022));
  exports.eligible = eligible