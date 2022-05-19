/*description 

Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

Examples:

("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codinywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"


/* Knowledge point

js Array.prototype.indexOf 

从数组中获取查询元素的位置, 如果不存在则返回-1, 如果有多个重复元素，那么总是返回第一个元素
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

arr.indexOf(searchElemenmt  [,fromIndex])  

example : 
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1


Array.prototype.slice()

slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. 
The original array will not be modified.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

*/

// JavaScript solution1 : 

stringMerge = (string1, string2, letter)=> string1.slice ( 0, string1.indexOf(letter)) + string2.slice (string2.indexOf(letter)) 


/*P.R.E.P
1.parameter 
create theree parameter in function stringMerge , named string1, string2, letter 

2.return 
This quesation request to return have the beginning of the first word and the ending of the second, with the dividing letter in the middle. both words will contain the dividing letter.

3.example 
("hello", "world", "l")       ==>  "held"         character is 'l' the first word 'he' , the second word 'ld',because will contain the dividing letter . 
("coding", "anywhere", "n")   ==>  "codinywhere"  character is 'n , the first word 'codi' ,the second word plus dividing letter is 'nywhere'

4.pesdo code 
//create function and three of parameter ,use arrow function 
stringMerge = (string1, string2, letter)=> 
//use .slice() method get from first index of the string1 , until the character before the dividing letter .slice() including the first index , so use .slice() method again ,  plus the second string including the dividing character and the ending of the second string . 
string1.slice ( 0, string1.indexOf(letter)) + string2.slice (string2.indexOf(letter)) 
*/