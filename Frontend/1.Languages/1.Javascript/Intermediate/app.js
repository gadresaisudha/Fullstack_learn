let message = `The quick
brown fox
jumps over
the lazy dog`;
console.log(message);

const fname = 'sudha';
const lname ='gadre';
console.log(`${fname+lname}`);

greet = (name)=>{
    return `hello ${name}`;
}
console.log(greet("Sudha"));

let a = 1;
let b = 2;
let c = 3;

let obj = {
  a,b,c
}
console.log(obj)

const lib ={
  sum : (a,b)=>{
    return a+b;
  },
  mul:(a,b)=>{
    return a*b;
  }
}
console.log(lib.sum(10,20),lib.mul(10*20));

const multiply= (a,b=1)=>{
 return a*b;
}
console.log(multiply(5));

function expand(a,b,c){
  console.log("a",a);
  console.log("b",b);
  console.log("c",c);
}
colors = ["red","blue","green"]
expand(...colors);

const obj1 = {x:1,y:2}
const obj2 = {z:3}
const obj3 = {obj1,obj2}
const obj4 = {...obj1,...obj2}
console.log(obj3)
console.log(obj4)

function variadic(...params){
  console.log(params)
}
variadic("sudha",19,true,'programmer')

const color = ["red","green","blue","purple"]
const [c1,c2,c3] = color
console.log(c1,c2,c3)

const color1 = {name:"red",size:12,shape:"xs"}
const {name} = color1
console.log(name)
const people = [
  {name:"sudha",age:19,size:26},
  {name:"haru",age:20,size:16},
]
const[, {size}] = people;
console.log(size===16? "hey":"nooo"); //16

const person = {name:"sudha",age:19,size:16}
for (let key in person){
    console.log(key,person[key])
}
const  foo1 = ['one','two','three']
for (let key of foo1){
    console.log(key)
}
foo1.forEach((key)=>console.log(key))
let num = [1,2,3,4,5]
let num2 = num.map(num=>num*2)
console.log(num2)
const peoples = [
  {name:"sudha",age:19,size:26},
  {name:"haru",age:20,size:16}
]
console.log(peoples.filter((key)=>key.age>19));
console.log(peoples.find((key)=>key.age===19));

const states = ["Tamil","kannada","Telugu"]
const res1 = states.every((state)=>state.length === 5);
console.log(res1)
const res2 = states.some((state)=>state.length === 5);
console.log(res2)

const numbers = [1,2,3,4,5]
const sum = numbers.reduce((p,c)=>{
return p+c;
},0);
console.log(sum);

const map = new Map()
map.set("string","value of string")
map.set({},"value of string")
map.set(function(){},"value of string")
console.log(map)
console.log(map.keys())
console.log(map.values())
console.log(map.delete("string"))
console.log(map)
console.log(map.size)
for (let [key,value] of map){
  console.log(`${key}: ${value}`)
}
for (let key of map.keys()){
  console.log(`${key}`)
}

const myset = new Set([1,2,2,3]);
myset.add("apple")
console.log(myset)
console.log(myset.has("banana"))
myset.add("banana")
myset.delete("banana")
console.log(myset)
for (let key of myset){
  console.log(`${key}`)
}


const mysymbol = Symbol("my name is sudha")
console.log(typeof mysymbol)
const mysymbol1 = Symbol("my name is sudha")
console.log(mysymbol===mysymbol1);
const details = {}
details.age = 19
details["gender"] = "male"
details["gender"] = "female"
details[mysymbol] = "alex"
details[mysymbol1] = "john"