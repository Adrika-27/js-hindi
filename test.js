
const accountId=1090022317
let accountEmail= "saloni@gmail.com"
var accPassword= "Saloni@123"
accCity= "Pune"
let accstate;
//accountId=2 //not allowed to change const value

console.log(accountId);
console.table({accountId,accountEmail,accPassword,accCity})

/*data types
number
string
boolean
undefined
null=> standalone value
symbol
bigint
object

*/

console.log(typeof accountId);
console.log(typeof accountEmail);
console.log(typeof accPassword);
console.log(typeof accCity);
console.log(typeof accstate);
console.log(typeof null); //object Null is standalone value but its type is object beacause of JS bug 
