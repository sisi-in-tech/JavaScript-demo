/* description 

Two to One

DESCRIPTION:
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/ 

//JavaScript solution1 : 

// new Set() Use to remove duplicate elements from the array 数组去重
// The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}