/* description 

Replace With Alphabet Position
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

*/ 

//JavaScript solution1 : 


function alphabetPosition(text) {
    //   create variable alphabet 
     let alphabet = "abcdefghijklmnopqrstuvwxyz";
    // set alphaNums as an empty array , store all numbers 
     let alphaNums = [];
    //  no need to deal with uppercase or lowercase 
     text = text .toLowerCase();
    // loop text to find text's index position 
    for (let i = 0 ; i < text .length; i++){
    // set alphabet index positon as variable idx 
        let idx = alphabet.indexOf(text[i]);
    // if idx as a space , comma etc , those are not index , then continue 
        if (idx === -1){
            continue ;
          }else {
    // if it is index , add 1 to get correct value , ex : alphabet a = 1 , index is 0 , so add 1 . 
             alphaNums.push(idx + 1 );
    }
    }
    // when return alphNums store are numbers , use .join() method add space in it , return as string . 
        return alphaNums.join(" ")
    }
    