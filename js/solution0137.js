/*
Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.


*/

//JavaScript solution : 

/*
Take the first string as a reference, it's common prefix , so all strings should directly have the first string as a common character
(Addition assignment)----(simple) x += y ----x = x + y
*/


var longestCommonPrefix = function(strs) {
//declare prefix as a empty string 
    let res = ''
// loop through the string in the array , find the index 0 character
    for(let i=0;i<strs[0].length;i++){
// loop through the string in the array , find if another character as a same character
        for(let j=1; j<strs.length; j++){
// if string index 0 character are not same 
            if(strs[j][i]!== strs[0][i]) 
// return the empty string res
                return res
        }
// otherwise return the index 0 character with the same character followed the index 0 character 
        res+=strs[0][i]
    }
// return the prefix we find in the array 
    return res
};

/* P R E P 
1. Declare variable longestCommonPrefix , sign it as function with parameter strs as string in the array   . Declare the prefix as an empty string as variable res. 
2. Return the Longest Common Prefix , Take the first string as a reference, it's common prefix , so all strings should directly have the first string as a common character, and then we find the longest common prefix . 
3. For example : 
Input: strs = ["flower","flow","flight"]
We use for loop to loop through  the array , find the index 0 character in each of string in this array . The result is 'f'; 
We use another for loop to loop through the array ,find other index character in each of string in this array if any of character are common characters . 
Use if condition , if index [j]index [i] characters are not equal to the first index with index[i] , that means it's not a common prefix , so we return the res as a empty string . 
OtherWise , return we find the common prefix addition assginment to index 0 and index i characters as longest common prefix 
So for the example : Output: "fl"

*/
