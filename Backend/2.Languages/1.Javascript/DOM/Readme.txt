DOCUMENT OBJECT MODEL

when a web page is loaded the browser creates a 
document object model of the page
console.dir(document); //gives the whole document object
console.log(document.body);
or console.dir(document.body);

accessing the dom
DOM selectors:
console.log(document.getElementsByTagName("h1"))
console.log(document.getElementsById("main"))
console.log(document.getElementsByClassname("cls"))

querySelector(Tagname or #id or .classname)
//gives only the first hit
console.log(document.querySelector("h1"))
console.log(document.querySelector("#main"))
console.log(document.querySelector(".cls"))

querySelectorAll(Tagname or #id or .classname)
//gives all of the hits
console.log(document.querySelectorAll("h1"))
console.log(document.querySelectorAll("#main"))
console.log(document.querySelectorAll(".cls"))