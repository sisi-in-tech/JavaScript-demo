/* description 

Century From Year

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

*/ 

// JavaScript solution1 : The Math.ceil() function always rounds a number up to the next largest integer.using ceiling method to round up to nearest century (100).

function century(year) {
    return Math.ceil(year / 100);
  }
  
  //JavaScript solution2 : 
  
  function century(year) {
    let result = 0;
    for (let i = 0; i < year; i++) {
      if (i % 100 === 0) {
        result++;
      }
    }
    return result;
  }