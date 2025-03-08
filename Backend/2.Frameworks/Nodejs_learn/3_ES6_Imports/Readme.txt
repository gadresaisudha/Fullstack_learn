ES6 updated imports and exports in Nodejs

greet.js -> have a function name greet() and want to 
be used insdie index.js
so first needs to be exported in greet.js
export default greet;
Then import it inside index.js as follows
import greet from "./greet.js";
when you run index.js then only will display as 
function call is made here.

peoples.js:
let person1 = "Sudha";
let person2 = "Dev";
let person3 = "Harati";
export  {person1,person2,person3};
index.js:
import {person1,person2,person3} from "./peoples.js";
console.log(person1,person2,person3);
use same naming convention for export and import

In order for these to work
Terminal folder >>>> npm init
generates package.json
in that add a line
"type" : "module",

or else will give an error

//no more access to __dirname and __filename
