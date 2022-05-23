/* description 

Reverse words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/ 

//JavaScript solution1 : 

function reverseWords(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
 }
 //frist split (' ')have space , second split('') do not have space . frist join have space , the second join do not have space . split(' '） with space , split to words , if split('') not with space , split to letters . 
 
 //P.R.E.P 
 
 // create a parameter named str , split each of the word , then use .map()method , The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
//  reverse each of word , and join characters , then join words between space . 
 
 // return  
//  it is return each of word reverse and join as a sentence . 
 
 /*for example : 
 
 1.first str.split (' ') split the sentence into an array of words . and use the space as a argument . If console.log it , it print "This" "is" "an" "example"
 2. loop all those words and split even further , into array or array of letters . I can use loop , but array have method map() for that . Bacially change all the items in it and return the same changed array . 
 split each of word as letters , for example, 'This' --> 'T''h''i''s' 
 3. reverse each of letter , for example , 'T''h''i''s' --->'s''i''h''T' 
 4. join letter and create a new word , for example , 's''i''h''T' ---> 'siht' 
 5. join all those new words , sperate with space , for example , 'sihT' 'si' 'na' '!elpmaxe'
  
 pesdo code : 
 
 create function with parameter str 

 function reverseWords(str) {

 //split the sentence into an array of words , loop all those word and split further , split each of word as 
 
 letters , reverse each of letter , join letter and create a new word , join all those new words . 
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
 }
 
 */
 