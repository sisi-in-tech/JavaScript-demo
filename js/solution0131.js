/*
Multiply Word in String

You are to write an function that takes a string as it's first paramter. This string will be a string of words.
您将编写一个函数，该函数将字符串作为第一个参数。该字符串将是一串单词。
You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.
然后，您应该使用第二个参数（它将是一个整数）来查找给定字符串中的相应单词。第一个单词将由 0 表示。
Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.
一旦你有了定位的字符串，你最终将乘以它提供的第三个参数，这也是一个整数。您还需要在每个单词之间添加连字符。
Example

modifyMultiply ("This is a string",3,5) 
Should return

"string-string-string-string-string"

Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.

*/


//JavaScript solution : 

const modifyMultiply = (str, loc, num) => 
    Array(num).fill(str.split('')[loc]).join('-')


/* 
use: 
1. Array() constructor
The Array() constructor is used to create Array objects.
2.Array.prototype.fill()
The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
3.The join() method takes all items in an iterable and joins them into one string.
*/