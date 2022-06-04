/*description 

Counting Array Elements
Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1}

*/ 


// JavaScript solution1 : 

//Use the map() method to iterate over the array, returning only the value of the relevant property.

function count(array){
    let obj = {};
    array.map(el => (obj[el] = obj[el]+1 || 1 ))
    return obj;
  }
  
  
  //JavaScript solution2 : 
  
  function count(array){
    var names = {};
    array.forEach(item => {
      names[item] = (names[item] || 0) + 1;
    });
    return names;
  }