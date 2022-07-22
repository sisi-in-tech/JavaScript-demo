/* 
How much water do I need?
DESCRIPTION:
My washing machine uses water amount of water to wash load (in JavaScript and Python) or max_load (in Ruby) amount of clothes. You are given a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.

For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.

Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 arguments: - water, load (or max_loadin Ruby) and clothes.

My washing machine is an old model that can only handle double the amount of load (or max_load). If the amount of clothes is more than 2 times the standard amount of load (max_load), return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load (max_load). If that is the case, return 'Not enough clothes'.

The answer should be rounded to the nearest 2 decimal places.

*/

//JavaScript solution : 

const howMuchWater = (water , load , clothes) => clothes > 2 * load ? 'Too much clothes' : clothes < load ? 'Not enough clothes': +(water * 1.1 ** (clothes - load)).toFixed(2)


/* P R E P 
1. Paramenter ; create a variable name 'howMuchWater' and parameter water , load , clothes . Use arrow function and Conditional (ternary) operator , condition ? exprIfTrue : exprIfFalse
2. Return : return the result depending on conditional 
3. Example :  for example , when clothes > 2 * load , return 'Too much clothes' ; when clothes < load ? , return 'Not enough clothes' ; when water * 1.1 ** (clothes - load) then give a exactly amount of water . 
4. pseudo code
// create variable , set arugments which are water , load , clothes ; use conditianl ternary operator 
// + is Unary plus , The unary plus operator ( + ) precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.
// .toFixed() , The toFixed() method formats a number using fixed-point notation.
const howMuchWater = (water , load , clothes) => clothes > 2 * load ? 'Too much clothes' : clothes < load ? 'Not enough clothes': +(water * 1.1 ** (clothes - load)).toFixed(2)