/* description 

String ends with?

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/ 

//JavaScript
// solution 

function solution(str, ending){
    return str.endsWith(ending);
  }
  
  
  
  
//   P.R.E.P
  
  //parameter 
//   This question requests if the first argument ends with the 2nd argument. We create two-parameter, the first one called str , the second one called ending . 
  
  //result 
//   I’ll use function .endsWith (ending) to get result if the first argument ends with the 2nd argument .
  
  //example 
//   const str1 = 'Cats are the best!';
//   console.log(str1.endsWith('best!'));
  // expected output: true
  
  //pesdo code 
  
  //create function with two parameter 
//   function solution(str, ending){
  //return the first argument ends with the 2nd argument 
//     return str.endsWith(ending);
//   }