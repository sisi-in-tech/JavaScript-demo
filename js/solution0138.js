/*
Valid Parentheses
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


*/

//JavaScript solution : 
/* 
stack pratice 
1. Think about the false situation :
(1)The extra string in the left and right direction , so it does not match.
Loop throught string , but the stack is not empty, indicating that there are corresponding left parentheses and no right parentheses to match, so return false.
(2)The parentheses are not redundant, but the type of the parentheses does not match.
Loop throught string , there are no match string , so return false 
(3)The right-direction parenthesis in the string is redundant, so it does not match.
stack is empty , nothing to match , so return false . 

switch case Syntax
switch(expression) {
  case x: // 当 expression 的结果与 value1 匹配时，执行此处语句
    // code block 
    break;
  case y: // 当 expression 的结果与 value1 匹配时，执行此处语句
    // code block
    break;
  default:// 如果 expression 与上面的 value 值都不匹配，执行此处语句
    // code block
}

Switching Details
If multiple cases matches a case value, the first case is selected.

If no matching cases are found, the program continues to the default label.

If no default label is found, the program continues to the statement(s) after the switch.

for...of synax

for (variable of iterable)
  statement

*/

var isValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
      let c = s[i];
      switch (c) {
        case '(':
          stack.push(')');
          break;
        case '[':
          stack.push(']');
          break;
        case '{':
          stack.push('}');
          break;
        default:
          if (c !== stack.pop()) {
            return false;
          }
      }
    }
    return stack.length === 0;
  };
  // 简化版本
  var isValid = function(s) {
      const stack = [], 
          map = {
              "(":")",
              "{":"}",
              "[":"]"
          };
      for(const x of s) {
          if(x in map) {
              stack.push(x);
              continue;
          };
          if(map[stack.pop()] !== x) return false;
      }
      return !stack.length; //loop completed and check if stack is empty .
  };
  
  