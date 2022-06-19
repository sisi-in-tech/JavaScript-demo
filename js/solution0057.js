/* description 

Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].


example : 

1 2   3    4    5  6   7    8     9   10 
I II III   IV  V  VI  VII  VIII   IX   X

mostly of Roman number are  larger num (left) small num(right)
number 4 and number 9  larger num (right) small number (right) 

number : 2020 
Roman num : M(1000) + M (1000) + X (10) + X(10) = MMXX 

number : 1194 
Roman num : M(1000) + C(100) + XC(100-10) + IV(5-1)=MCXCIV 

MCXCIV (M:1000, C:100, X:10. C:100, I:1,V:5)
MC:1000 > 100;SUM 
MC : 1000 > 100 SUM 
CX : 100 > 10 SUM 
XC:  10 < 100 MINUS 
CI : 100 > 1 SUM 
IV : 1<5 MINUS 
Result : 1000 + 100 -10 + 100 -1 +5 

1. Create object 
2. result variable 
3. loop 
4. return result 
*/
// JavaScript solution1 : 
var romanToInt = function(s){
     var obj = {
           "I":1 , 
           "V":5 , 
           "X":10 , 
           "L":50 , 
           "C":100, 
           "D":500, 
           "M":1000
  };
     var result = 0 ; 
//s is the input string 
     for (var i = 0 ; i <s.length;i++){
       
       var front = s[i], back = s[i+1];
// if condition if it needs minus 
       if (obj[back]>obj[front]){
            result -=obj[front];
    
    }else {
       result +=obj[front];
   }

 };
     return result ;
}












