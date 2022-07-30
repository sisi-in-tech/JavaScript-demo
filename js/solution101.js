/*
DESCRIPTION:
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
*/ 

//JavaScript solution : 
function howMuchILoveYou(nbPetals) {
  
    let arr = ['I love you','a little','a lot','passionately','madly','not at all'];
    
    for (let i = 0; i <= nbPetals ; i++){

        arr.push(arr[i]);
    }
    
    return arr[nbPetals-1];
    
}

//P R E P 

/*
1.Parameter : create function howMuchILoveYou , argument nbPetals , declear a array , all the string in the array . 
2. Use for loop , loop through each of the elements from nbPetals , The push() method adds one or more elements to the end of an array and returns the new length of the array.
3. For example, i is the index of the arr , i=0 point to string in the array 'I love you' , the push() method adds one element to the end of an array . the function return arr[0] ,it is 'I love you'
4.  pseudo code

function howMuchILoveYou(nbPetals) {
  // declear an arr as condioner of all the string .
    let arr = ['I love you','a little','a lot','passionately','madly','not at all'];
  // use for loop , loop through argument nbPetals .
    for (let i = 0; i <= nbPetals ; i++){
  // adds the element to the end of an array 
        arr.push(arr[i]);
    }
  // return arr[index] point to the string .
    return arr[nbPetals-1];
    
}


*/