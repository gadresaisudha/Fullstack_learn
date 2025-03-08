JAVASCRIPT – BEGINNER

javascript – programming language and plays crucial role in web development

Link your .js file with .html
Inside your .html body use the following
<body>
  <script src="app.js"></script>
</body>
and inside app.js give your js script
alert : alert("message")
Console methods :
console.log("")
console.error("")
console.table({name:"",age:19})
console.clear()
comments : // - single line

variables: 
store data or reuse them
let , var, const are variable types
var is not used mostly use let
let name;
name = "sudha";
console.log(name);
cannot use -,numbers at beginning
convention : youtubeChannel or youtube_channel(camelcase or kababcase)
Diff between let and const
let y = "haru";
y = "sharu";
console.log(y);
gives error as const declared variable cannot be changed
const z = "haru";
z = "sharu";
console.log(z);

Primitve types:
Number: supports int,float and all arithmetic operations
let num = 10;
console.log(2%2);
console.log(2**2);
num++;
num--;
console.log(num);
to get the type of variable
console.log(typeof num);
Boolean : true,false
let isTrue = true;
console.log(isTrue);
Falsy values : false,null,undefined,0,-0,NaN,"",'',``
Comparison operators:
->Relational operators: >,<,>=,<=,
->Equality Operators: === strict equality(type+value),!== strict not equal(type+value), == loose equality, != loose not equality(checks value)
String:
let x= `sudha`;
let y = "sai";
console.log(x+y); //sudhasai
console.log(x.concat(y)); //concat
console.log(x+="Gadre"); //append
console.log(x.length); //length
console.log(x.toLowerCase()); //to lower case
console.log(x.toUpperCase()); // to upper case
console.log(x.slice(0,3)); //slices your string(sud) --excludes the end
console.log(x.split('')); // split string based on seperator and return array
console.log(x.split('').join('')); // joins the splitted string based on seperator
console.log(x.includes('u')); //checks for substring in string and returns Boolean
console.log(x.trim()); //removes all empty space from string
console.log(`${x} ${y} gadre`) // displays all

TypeConversion:
//convert string to number
let money ="50";
money = parseInt(money);
console.log(typeof money); //displays number
money = +money; //displays number
money = Number(money) //displays number

//convert number to string
let money = 50;
money = money.toString();
console.log(typeof money); //displays string
money = String(money) //displays string

//convert string to float
let money ="50.5";
money = parseFloat(money);
console.log(typeof money); //displays number


ControlFlow:
if(condition){

}else if(condition){

}
else{

}
switch(condition){
  case a:
    //print
    //break
  case b:
    //print
    //break
  default:
    //break
}
for(let i =0;i<array.length;i++){
  console.log(array[i]);
}
let i =0
while(i<10){
  console.log(i);
  i++;
}
let m = 0;
do{
  console.log(m);
  m++;
}while(m<10)

Logical Operators : &&(and) , ||(or), !(not)

Arrays :1d, 2d or nested array
const myList = [1,2,3,4,5,["one","two"]];
console.log(myList,myList[0],myList[5][1]);
can store numbers,strings,objects,nested array
concat() -> joins two or more array
includes() -> check if array contains element
push()-> adds at end and return length
unshift()->adds at beginning and return length
pop()-> removes from end and return removed element
shift()->removes from beginning and return removed element
sort()->sorts the array
slice()-> selects part of array
splice()-> removes or replace existing element and/or add new elements
reverse()->reverse the array
join()-> joins with seperator
myList.push("third")

objects in JS: JSON(key-value pairs or property-value)
const fruits = {
    name : 'orange',
    color : 'orange',
    expiry : 19,
    child : ['mini','max'],
    isFruit : true,
  };
fruits.name = 'apple';
  console.log(fruits);
  console.log(typeof fruits);
  console.log(fruits.name);
  console.log(fruits['name']);
  console.log(fruits['expiry']);
  delete fruits.child;
  console.log(fruits);

Functions : block of code to perform a task
code reusable, declare once, makes program easier

function name(parameter){
}
Function declaration:
console.log(greet("sudha"));
function greet(name){
  console.log(`Hello from function ${name}`);
  return 10;
}

Function expression:
const greetings = function (user){
  console.log(`Hello ${user}`);
}
greetings("Sudha");

function declaration doesn't give error if you call the function before declaring it 
but the function expression gives it 
always declare function first as variable and call it in function expressions

callback funcion: calling funcion with function as parameter

funcion showCallFunc(fn){
  const value = 10;
  fn(value);
}
showCallFunc(function(value){
console.log(value);
});

Scope : determine accessibility of variables
Global Scope -> accessibility everywhere declared outside
local Scope -> accessibility only in function


method in javascript: - method inside JSON object
function greet(name){
  console.log(`Hello from function ${name}`);
  return 10;
}
const fruits = {
    name : 'orange',
    color : 'orange',
    expiry : 19,
    child : ['mini','max'],
    isFruit : true,
    greet,
  };
console.log(fruits.greet("sudha"))


or

const fruits = {
    name : 'orange',
    color : 'orange',
    expiry : 19,
    child : ['mini','max'],
    isFruit : true,
    greet: function(value){
        console.log(value);
        },
  };
console.log(fruits.greet("sudha"))

JSON methods:
JSON.stringify(Json object) -> converts json object into JSON string
JSON.parse(JSON string) -> converts into JSON object


Date methods :
const curr = new Date(year,month,day,hours, .....);
const curryear = curr.getFullyear()
curr.getMonth()
curr.getDay()
curr.toDateString()
curr.setDate(curr.getDate()+1)

SetInterval and setTimeout:
SetInterval -> repeat the function for that Interval
setTimeout -> only execute function after that Timeout
clearInterval -> stop the interval