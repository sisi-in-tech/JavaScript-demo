/*description 
Name Shuffler
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/ 
//JavaScript solution 
function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
  }