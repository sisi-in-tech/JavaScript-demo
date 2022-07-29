/*
Do I get a bonus?
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

*/
//JavaScript soluton : 

function bonusTime(salary, bonus) {
    if (bonus === true ){
        return '£'+salary * 10;
    }else if (bonus === false ){
       return '£'+ salary
    }
  }

// P R E P 
/*
1. parameter : create function bonusTime , set two arguments salary and bonus ; 
2. return : use if else statment , if bonus is ture then return salary multiple 10 , with currency "£" in string datatype . if bonus is false then return salary , with currency "£" in string datatype .
*/ 