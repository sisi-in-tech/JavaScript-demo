/*
leetcode string - 20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.


https://www.javascripttutorial.net/javascript-stack/ 

A stack has two main operations that occur only at the top of the stack: push and pop. The push operation places an element at the top of stack whereas the pop operation removes an element from the top of the stack.

*/

//JavaScript solution : 
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
// declare stack as an empty array 
    let stack = []
// for loop loop through the each of the elements 
    for (let i = 0 ; i < s.length ; i++){
// decalre element in the parameter s as c 
        let c = s[i];
// use switch pass and push match element 
        switch(c) {
            case '(':
             stack.push (')');
             break;
            case '[':
             stack.push (']');
             break;
            case '{':
             stack.push ('}');
             break;
// if it is not match the condition ,use run default statement 
             default : 
             if (c !== stack.pop()){
                 return false
             }
        }
    }
// if stack is empty , return length equal to 0 
    return stack.length === 0;
 };


