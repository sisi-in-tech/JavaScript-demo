/*
Nice Array
A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

examples:

[2, 10, 9, 3] is a nice array because

 2 =  3 - 1
10 =  9 + 1
 3 =  2 + 1
 9 = 10 - 1

[4, 2, 3] is a nice array because

4 = 3 + 1
2 = 3 - 1
3 = 2 + 1 (or 3 = 4 - 1)

[4, 2, 1] is a not a nice array because

for n = 4, there is neither n - 1 = 3 nor n + 1 = 5
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.

*/

//JavaScript solution1: 
function isNice(arr){
    let result = 0, 
        length = arr.length 
    if (arr[0] !=undefined){
      for (let index = 0 ; index < length; index++){
        for (let index2 = 0; index2 < length; index2++){
          if(arr[index]==arr[index2]+1 || arr[index] == arr[index2]-1){
            result++
            break
          }
        }
      }
       return result == length
      }else {
        return false 
      }
    }

/*
statements and declarations : break 
The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.

P R E P 
1. parameter : named function isNice with parameter arr is the array mentioned in the question . Declare variable result and assign value equal to 0 . 
2. return : use if statment if the arr is not an empty array, use for loop to loop through the index , if the pervious element equal to the element plus 1 or minus 1 then incerment until loop through all the elements in the arr . return the array's length equal to result . if it's not match the if conditinion then return false . 
3. for example : [2, 10, 9, 3] this array is not an empty array , 2 the index is 0 , 3 the index is 3, both of them in the array , and as same way to loop each elements , either element equal to other element plus 1 or element equal to other element minus 1 , return true , the result is Nice array . 
4. pesudo code 
// named function isNice and set parameter arr 
function isNice(arr){
// declare variable result as 0 and variable length as array's length   
    let result = 0, 
        length = arr.length 
// if statement array is not an empty array then run for loop . 
    if (arr[0] !=undefined){
      for (let index = 0 ; index < length; index++){
        for (let index2 = 0; index2 < length; index2++){
// if if the pervious element equal to the element plus 1 or minus 1 then incerment result .
          if(arr[index]==arr[index2]+1 || arr[index] == arr[index2]-1){
            result++
            break
          }
        }
      }
       return result == length
//else return false 
      }else {
        return false 
      }
    }
*/


// JavaScript solution2 : 
const isNice =arr =>
   arr.length !=0 
    ? arr.every(element => arr.some(element2 => element == element2 +1 || element ==element2 -1)):false

/*
1. standard build in object : Array.prototype.every()
The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
Arrow function
every((element) => { } )

2. ternary Operator 

3. Array.prototype.some()
The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

*/



    
    
  