/*
Keep up the hoop
DESCRIPTION:
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".
*/

//JavaScript solution1 : 
function hoopCount (n) {
    return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
  }

//JavaScript solution2 : 
function hoopCount (n) {
    for (i=0 ; i<=n ; i++){
      if (n >= 10){
       return ("Great, now move on to tricks")
        }
      else if (n < 10){
       return ("Keep at it until you get it")
      }
    }
 }

 /* P R E P 
 1.Parameter : create function hoopCount with parameter n , use for loop check the hoop times less than or equal or greater than 10 . 
 2. Return : use if statemnet , if n greater than or equal than 10 , then return "Great, now move on to tricks" ; if n less than 10, then return "Keep at it until you get it"
 3. pesduo code : 
// create function hoopCount with parameter n
function hoopCount (n) {
// for loop to loop through the 
    for (i=0 ; i<=n ; i++){
// if condition , if n greater than or equal than 10
      if (n >= 10){
       return ("Great, now move on to tricks")
        }
    else if n less than 10
      else if (n < 10){
       return ("Keep at it until you get it")
      }
    }
 }

 */