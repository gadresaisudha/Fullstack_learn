Modules in Nodejs

greet.js -> have a function name greet() and want to 
be used insdie index.js
so first needs to be exported in greet.js
module.exports = greet;
Then import it inside index.js as follows
const greetfunction = require("./greet"); -> name of the file 
greetfunction("Sudha");
when you run index.js then only will display as 
function call is made here.

peoples.js:
let person1 = "Sudha";
let person2 = "Dev";
let person3 = "Harati";
module.exports = {person1,person2,person3};
index.js:
const {name1,name2,name3} = require("./peoples");->name of file
console.log(name1);