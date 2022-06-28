/*description 
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
*/ 

//JavaScript solution1 : 
smash = function (words) {
    return words.join(" ");
  };

//solution2 :
const smash = words => words.join(' ');