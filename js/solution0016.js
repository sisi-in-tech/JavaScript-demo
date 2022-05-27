/* description 

Friend or Foe?

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

*/ 
/*
knowledge 

Array.prototype.filter()
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

example : 

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);


// Arrow function
filter((element) => { /* ... */ } )
// filter((element, index) => { /* ... */ } )
// filter((element, index, array) => { /* ... */ } )

// console.log(result);
//  expected output: Array ["exuberant", "destruction", "present"]s


// JavaScript solution1 : 

function friend(friends){  
return friends.filter(function (item) 
{ return item.length === 4 });  
}



//solution2 : 

function friend(friends){
  return friends.filter(n => n.length === 4)
}

//Arrow function solution3 : 

const friend = friends => friends.filter(friend => friend.length == 4);


//P.R.E.P 

 //parameter 

// parameter friends use array filter()method create a new array with exactly 4 letters  

// result 

// take all of 4 letters words to a new array  

//for example : 

// ["Ryan", "Kieran", "Jason", "Yous"]  have two words have 4 letters , so the result is ["Ryan", "Yous"]

//pseudo code : 

//create function named friend  with parameter friends  
function friend(friends){  
//create a new array with 4 letters 
return friends.filter(function (item) 
{ return item.length === 4 });  
}


