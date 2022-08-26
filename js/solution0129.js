/*
Capitalize first letter of a string
DESCRIPTION:
Capitalize First Letter of a String
Write a function capitalize() which capitalizes the first letter (if any) of the given string. For example:
Input	Output
string	String
hello World	Hello World
i love codewars	I love codewars
This sentence is already capitalized	This sentence is already capitalized
0123the first character of this sentence is not a letter	0123the first character of this sentence is not a letter
JavaScript / CoffeeScript: Extend the String prototype with a method capitalize() so you can call it on a string like so: "string".capitalize(). Learn about inheritance and the prototype chain.

Furthermore, the built-in string methods toUpperCase() and toLowerCase() are disabled for this Kata.

The following table shows the range of ASCII values for various characters:
Character A – Z : ASCII Value 65 – 90
Character a – z : ASCII Value 97 – 122
Character 0 – 9 : ASCII Value 48 – 57
Special Symbol : ASCII Value 0 – 47, 58 – 64, 91 – 96, 123 – 127

*/
String.prototype.capitalize = function() {
    let code = this.charCodeAt(0)
    if (code > 96 && code <123){
        code -= 32
    }
    return String.fromCharCode(code) + this.slice(1)
}

/* 
String.prototype :The String object is used to represent and manipulate a sequence of characters.
String.prototype用于为某字符串对象新增方法，比如：
在javascript中有一方法replace，它是用于替换某字符串中第一个匹配的字符，如果我们想为它追加一个循环匹配所有字符的方法时，可以这样子：
String.prototype.replaceAll = function(oldStr, newStr) {
   return this.replace(new RegExp(oldStr,"gm"),newStr); 
}
*/
