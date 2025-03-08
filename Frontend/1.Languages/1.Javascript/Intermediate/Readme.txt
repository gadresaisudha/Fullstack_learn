Template Strings or literals :
->> `${}` use these for displaying variable values, functions,also arrays
let name = "Sudha";
console.log(`Hi i am ${name}`);

arrow functions -> shorter way to define functions
greet = (name)=>{
    return `hello ${name}`
}
console.log(greet("Sudha"))
Enhanced object literals ->enhancements for objects syntax
function getPersionES6(name, age, height) {
    return {
      name,
      age,
      height,
    };
  }  
getPersionES6("Zachary", 23, 195);

Default parameters:
defultly provide values to our parameters
function f1(count=5){
    if(count===5){
        console.log(count);
    }
}
count()

spread operator:
used to make shallow copies of js objects
make code concise
takes an iterable and makes into individual elements
function expand(a,b,c){
    console.log("a",a);
    console.log("b",b);
    console.log("c",c);
}
colors = ["red","blue","green"]
expand(...colors);
//a,red b,blue

rest operator:
allow you to accept indefinite number of arguments
function user(...userdata){
    consolelog(userdata)
}
user("Sudha",19,'programming')

Destructure arrays, objects,functions
const  foo = ['one','two','three']
const [one] = foo
console.log(one) //one
let a, b;
[a=5,b=8] = ['one','two'];
console.log(b)
function f(){
    return [1,2]
}
let a,b;
[a,b] = f()
console.log(a) //1
const [a,...b] = [1,2,3]
console.log(b) gives array from [2,3]
//In object Destructure order doesnt matter but name does
const student = {name:"sudha",age:19}
const {name} = student
console.log(name) //use same name
//object destructure and rest operator
let {a,b,...rest} = {a:100,b:200,c:300,d:400}
console.log(rest)
function destructure
const person = {name:"sudha",age:19,size:16}
function f(person){
    console.log(`Name:${person.name}`)
    console.log(`age:${person.age}`)
    console.log(`size:${person.size}`)
}
f(person)
After destructure
function f({name,age:a,person}){
    console.log(`Name:${name}`)
    console.log(`age:${a}`)
    console.log(`size:${size}`)
}
f(person)
Destructure inside destructure:
const songs = [
    {name:"sudha",age:19,size:26},
    {name:"haru",age:20,size:16}
]
const[, {size}] = people;
console.log(size); //16

ternary operator:
condition? expriftrue : expriffalse
console.log(size===16? "hey":"nooo"); //16

for.... in loop
//applicable for all
const person = {name:"sudha",age:19,size:16}
for (let key in person){
    console.log(key,person[key])
}
for....of loop
//gives the values directly without need of key
//only for array,strings,maps,sets 
const  foo1 = ['one','two','three']
for (let key of fool){
    console.log(key)
}
foreach helper
const  foo2 = ['one','two','three']
foo2.forEach((key)=>console.log(key))

map() method creates a new array populated 
with results of calling a provided function 
on every element in calling array
let num = [1,2,3,4,5]
let num2 = num.map(num=>num*2)

filter() method built in array that allows 
to create a new array containing elements
that pass a certain condition
const peoples = [
    {name:"sudha",age:19,size:26},
    {name:"haru",age:20,size:16}
]
console.log(peoples.filter((key)=>key.age>19));

find() method -> return first element that 
satisfies the condition
const peoples = [
    {name:"sudha",age:19,size:26},
    {name:"haru",age:20,size:16}
]
console.log(peoples.find((key)=>key.age===19));

every() method -> checks for all elements in array
return true if callback function 
returns true for every element 
and false if any element fails
const states = ["Tamil","kannada","Telugu"]
const res1 = states.every((state)=>state.length === 5);
console.log(res1)

some() method -> checks for all elements in array
return true if callback function 
returns true for atleast one element satisfies
and false if any no element satisfies
const res2 = states.some((state)=>state.length === 5);
console.log(res2)

reduce() method ->applies for all elements in array
accumulating to single value
for calculation mostly
const numbers = [1,2,3,4,5]
const sum = numbers.reduce((p,c)=>{
return p+c;
},0);
console.log(sum);

map DS-> built in DS to store key-value pairs
similar like objects but for objects keys are strings and symbols
but for map keys are any Datatype int,boolean ...
maintain insertion order, provides method for iteration
const map = new Map()
map.set("string","value of string")
map.set({},"value of string")
map.set(function(){},"value of string")
console.log(map)
console.log(map.keys())
console.log(map.values())
console.log(map.delete({}))
console.log(map.size)
for (let [key,value] of map){
    console.log(`${key}: ${value}`)
}
for (let key of map.keys()){
  console.log(`${key}`)
}

set DS ->built in DS for unique values
each value occurs only once
useful to store set of unique elements and search for them
const myset = new Set([1,2,2,3]);
myset.add("apple")
console.log(myset)
console.log(myset.has("banana"))
myset.add("banana")
myset.delete("banana")
myset.clear()
for (let key of myset){
  console.log(`${key}`)
}

symbol -> primitive and unique immutable Datatype
identifier for object properties
Symbol will always be unique eventhough it has same string representation
const mysymbol = Symbol("my name is sudha")
console.log(typeof mysymbol)
const mysymbol1 = Symbol("my name is sudha")
console.log(mysymbol===mysymbol1);
const details = {}
details.age = 19
details["gender"] = male
details["gender"] = female
details[mysymbol] = "alex"
details[mysymbol1] = "john"
