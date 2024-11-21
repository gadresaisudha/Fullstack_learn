
let name = "Sudha";
let goal = "Programmer";
let gender = "Female";
let twitterhandle = "sudha@xyz";
console.log(name,goal,gender,twitterhandle);

let f = 10;
let s = 20;
console.log(f+s);
console.log(f-s);
console.log(f*s);
console.log(s/f);
console.log(s%f);
console.log(f**s);

let isJSPL = true;
let isJSH = false;
let favNumb = 10;
console.log(isJSPL,isJSH,favNumb+undefined);

console.log(f>s);
console.log(f<s);
console.log(f>=s);
console.log(f<=s);

s = 10;
console.log(f===s);
console.log(f!==s);
s = "10";
console.log(f==s);
console.log(f!=s);

let first = "SaiSudha";
let last = "Gadre";
let fullname = first.concat(last);
let uppername = fullname.toUpperCase();
let message  = `My name is  ${uppername}. I have been a software developer for 3 years. `;
message+= "I'm looking for a job.";
console.log(message);

let password = 9;
if(password===8){
    console.log("welcome");
}
else if(password<=8){
    console.log("password short");
}
else if(password>=8){
    console.log("password long");
}
else {
    console.log("password provide");
}
let x = '0';
switch(x){
    case 0:
        console.log("hey");
        break;
    case 1:
        console.log("hi");
        break;
    default:
        break;
  
  }
  for(let i =0;i<2;i++){
    console.log(i);
    for(let j = i;j<3;j++){
        console.log(j);
    }
  }

  let z =0;
  while(z<5){
    console.log(z);
    z++;
  }
  let m = 0;
  do{
    console.log(m);
    m++;
  }while(m<5)

const a = true;
const b = false;
console.log(a&&b,a||b,!b);

const myList = [1,2,3,4,5,["one","two"],"three"];
console.log(myList,myList[0],myList[5][1]);

const car = {
    type : 'Fait',
    color : 'white',
    model : 500,
  };
  car.type = 'Toyota';
  car.wheels = 4;
  console.log(car);
 

  function showCallFunc(fn){
    value = 10;
    fn(10);
  }
  function fn(val){
    console.log(val);
  }
  showCallFunc(fn);

const currdate = new Date(2024,10,10);
console.log(currdate);

//console.log(currdate.getFullyear());
console.log(currdate.getMonth());

const idintr = setInterval(()=>console.log('hi'),1000)
setTimeout(()=>{
    console.log("Will start after time");
    clearInterval(idintr);
    console.log('Interval stopped');
},3000)
