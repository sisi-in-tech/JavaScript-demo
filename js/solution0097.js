/* 
Isograms
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/ 

//JavaScript solution : 
function isIsogram(str){
// declear two variable ,both are index of str .
    var i, j;
// eturns the calling string value converted to lower case.
    str = str.toLowerCase();
// loop through all letters from index 0.
    for(i = 0; i < str.length; i++) {
// loop through all letters from index 1.
      for(j = i + 1; j < str.length; j++) {
// if conditioner , any of two letters equal with value and data type .
        if(str[i] === str[j]) {
// it's not an isogram,so return false .
          return false;
        }
      }
    }
// it's not an isogram,so return true .
    return true;
 }

/* P R E P 
1. parameter : create two parameter , both of are index of str , For example ，"aba" , when str[i]="a"; str[j]="b",and so on 
2. return : if index of str i as equal index of str j with data value and type , it's false .
3. For example , "aba" when i = 2; j =3 , then "a"==="a" return false . If loop through has no repeating letters, return true.
4. pseudo code

*/

 //JavaScript solution2: 
 function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }