/*
70. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 
Constraints:

1 <= n <= 45

*/

//JavaScript solution : 

/*
As the exmaple in this question : 
1 : [1]       // 1         
2 : [1,1] [2] // 2
3 : [1,1,1] [1,2] [2,1] // 3
4 : [1,1,1,1] [1,2,1] [2,1,1][2,2] [1,1,2] // 5
5 : [1,1,1,1,1] [1,1,1,2][1,2,2][2,1,2][2,2,1][1,2,1,1][2,1,1,1,][1,1,2,1] // 8

So the formula : 
f(n) = f(n-1) + f(n-2)   
for example f(5) = f(4) + f(3)   ;  f(6) = f(5) + f(4)

use recursion to solve this question 

*/

var recur = function (n, lookup){
    if (n <=3){
        return n; 
    }
    // check if lookup have any of result 
    if (!!lookup[n]){
        return lookup[n];
    }
    const result = recur(n-1, lookup) + recur(n-2, lookup)
    lookup[n] = result ;
    return result ;
}

