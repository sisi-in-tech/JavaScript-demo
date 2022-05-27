/*description 
Minimize Sum Of Array (Array Series #1) 最小化数组总和（数组系列 #1）

Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
任务
给定一个整数数组，求两个整数乘积相加得到的最小和。

Notes
Array/list will contain positives only . 数组/列表将仅包含正数
Array/list will always has even size. 数组/列表的大小总是相同的

Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product , 9*0 + 8*2 +7*4 +6*5 = 74

*/

/* knowledge : 
 sort () 
 loop 
 reduce()

Multiply the min and max values ​​and add them together， it's the minimize sum of array . 
*/ 

//solution1: 
function minSum(arr) {
    const newArr = arr.sort((a,b)=>a-b);
    let minsum = 0;
    for(let i = 0; i < newArr.length/2; i++){
      minsum += (newArr[i] * newArr[newArr.length-1-i]);
    }
    return minsum;
  }



//solution2 :

function minSum(arr) {
  return arr.sort( (a,b) => a-b )
            .slice(0, arr.length/2)
            .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
}



/*
P.R.E.P 

solution2 : 

1.parameter 

The quesation is the minimize sum of array . So it need to Multiply the min and max values ​​and add them together，

function name minSum , create parameter name arr.

2. return  

first sort number from 0 to max value . we use Array.prototype.sort() , to sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, 

then use Array slice(),The slice() method returns selected elements in an array, as a new array. The slice() method selects from a given start 0  , up to a (not inclusive) given end ,array length divide by 2  .  The slice() method does not change the original array.

use Array.prototype.reduce() , to calculate then minimize sum of array . 

3.example : 

***minSum({12,6,10,26,3,24}) ==> return (342)

sort number from min to max value : minSum({3,6,10,12,24,26})

use slice returns selected elements in an array , {3, 6, 10} 
reduce acc = 3*26 + 6 * arry length 4 , (6-1-1) 6 is  array lengh minus index 1 , minus 1 . so 6 * 24 

The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342

*** minSum({9,2,8,7,5,4,0,6}) ==> return (74)

sort number from min to max value : minSum({0,2,4,5,6,7,8,9})

use slice returns selected elements in an array {0,2,4,5}
reduce acc = 0*9 + 2* array length 6 , so it's the value 8 , beacuse 8 - 1 - 1 , 8 is array length minus index 1 , minus 1 . so 2 * 8

4. pseudo code

//create function minSum and parameter arr . 

function minSum(arr) {
// sort number from 0 to max value 
  return arr.sort( (a,b) => a-b )
// selected elements in the array , as a new array 
            .slice(0, arr.length/2)
// caluate minmize sum of array 
            .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
}

*/

