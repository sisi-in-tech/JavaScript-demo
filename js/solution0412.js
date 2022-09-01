/*
String array 
412. Fizz Buzz  
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
*/

//JavaScript solution :
/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    const answer = [];
    for (let i = 1; i <= n; i++) {
        const sb = [];
        if (i % 3 === 0) {
            sb.push("Fizz");
        }
        if (i % 5 === 0) {
            sb.push("Buzz");
        }
        if (sb.length === 0) {
            sb.push(i);
        }
        answer.push(sb.join(''));
    }
    return answer;
};


//JavaScript solution2 : 
var fizzBuzz = function(n) {
    var res = []
    for (var i = 1; i <= n; i++) {
        var i3 = i % 3
        var i5 = i % 5 
        if (i3 === 0 && i5 === 0) {
            res.push('FizzBuzz')
        }  else if (i3 === 0) {
            res.push('Fizz')
        } else if (i5 === 0) {
            res.push('Buzz')
        } else {
            res.push(i.toString())
        }
    }
    return res
};

/* 
P R E P 
1. Parameter : declare a variable as empty array , when loop through the array , if match the condition then push to the empty array . 
2. return : a string array, if match the certain condition return the words , if it's not match the condition return the index as string . 
3. example :
Input: n = 3  ; answer : 1 is none of the above conditions are true so push as a string "1", 2 is none of the above conditions are true, so push as a string "2" , 3 is match i3 === 0 condition , so push as 'Fizz'.
Output: ["1","2","Fizz"]
4. pesudo code : 

var fizzBuzz = function(n) {
    // declare a variable as empty array 
    var res = []
    // use for loop to loop through the array 
    for (var i = 1; i <= n; i++) {
    // declare i3 and i5 
        var i3 = i % 3
        var i5 = i % 5 
    // if condition get result "FizzBuzz"
        if (i3 === 0 && i5 === 0) {
    // push to res
            res.push('FizzBuzz')
    // if else condition get "Fizz"
        }  else if (i3 === 0) {
    // push to res
            res.push('Fizz')
    // if else condition get "Buzz"
        } else if (i5 === 0) {
    // push to res
            res.push('Buzz')
        } else {
    // push index as string 
            res.push(i.toString())
        }
    }
    // return the res 
    return res
};


*/

