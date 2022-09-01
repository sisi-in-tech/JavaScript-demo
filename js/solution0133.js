/*
Odd-Even String Sort
Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces

input: 'CodeWars'
output 'CdWr oeas'

S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'
Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
odd ones are 1, 3, 5, 7, so the second group is 'oeas'
And the final string to return is 'Cdwr oeas'

*/ 


//JavaScript solution : 
const sortMyString = s => {
    let even = s.split('').filter((v, i) => i % 2 === 0).join('')
    let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
    return even + ' ' + odd
}

/*
The filter() method creates a new array filled with elements that pass a test provided by a function.
P R E P 
1. paramter : named string s as parameter , declare avariable even for hold index which is even number's value , declare avariable odd for hold index which is odd number's value  . 
2. return a new string with index even's value + space + index odd's value . 
3. Example : input: 'CodeWars' , we split the string s , variable even filter to new array which all index are even number 's value . the even index are 0, 2, 4, 6, so we have 'CdWr' as the first group; 
odd ones are 1, 3, 5, 7, so the second group is 'oeas', And the final string to return is 'Cdwr oeas'.
4. pesudo code : 
// declare sortMyString use arrow function , paramenter s is the original string . 
const sortMyString = s => {
// seperate even index value and odd index value 
    let even = s.split('').filter((v, i) => i % 2 === 0).join('')
    let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
// return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated
    return even + ' ' + odd
}

*/