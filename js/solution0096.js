/*
Quarter of the year

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


*/

//JavaScript solution 1 : 

const quarterOf = (month) => {
    if (month >=1 && month <=3){
      return 1
    }else if (month >=4 && month <=6){
      return 2
    }else if (month >=7 && month <=9){
      return 3
    }else if (month >=10 && month <=12){
      return 4
    }
   
 }

 //JavaScript solution 2 : 
 /*
 The Math.ceil() function always rounds a number up to the next largest integer.
 console.log(Math.ceil(.95));
 expected output: 1


 const quarterOf = (month) => {
    return Math.ceil(month / 3) 
 }

*/