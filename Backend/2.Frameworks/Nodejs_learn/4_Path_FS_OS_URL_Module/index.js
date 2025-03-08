import path from "path";
console.log(path.basename(" C:\\Users\\index.js")); 
console.log(path.dirname("C:\\Users\\index.js"));
console.log(path.extname("C:\\Users\\index.js"));
console.log(path.join("C:","Users","index.js",".."));
console.log(path.normalize("C:\\\\\Users\\\index.js\\"));
console.log(path.parse("C:\\Users\\index.js"));
console.log(path.parse("C:\\Users\\index.js").base);

import * as fs from "fs/promises";
try{
    await fs.mkdir('C:\\Users\\gadres\\Documents\\nodejs\\Expressjs\\Code',{recursive:true});
    console.log('folder created');
}
catch(error){
 console.log(error);
}
try{
    const files = await fs.readdir('C:\\Users\\gadres\\Documents\\nodejs\\Expressjs\\Code');
    for (const file of files){
        console.log(file)
    }
}
catch(error){
 console.log(error);
}
try{
    await fs.rmdir('C:\\Users\\gadres\\Documents\\nodejs\\Expressjs\\Code\\Courses');

}
catch(error){
 console.log(error);
}
try{
    await fs.writeFile('Reaadme.md',"Hello Nodejs");
}
catch(error){
 console.log(error);
}
try{
    const data  = await fs.readFile('Reaadme.md','utf-8');
    console.log(data);
}
catch(error){
 console.log(error);
}
try{
    await fs.appendFile('Reaadme.md',"Nodejs is the best");
}
catch(error){
 console.log(error);
}
try{
    await fs.copyFile('Reaadme.md','info.txt');
}
catch(error){
 console.log(error);
}
try{
    const info = fs.stat('info.txt');
    //console.log(info);
    //console.log(info.isDirectory());
    //console.log(info.isFile());
}
catch(error){
 console.log(error);
}
import * as fscall from "fs";
fscall.mkdir("C:\\Users\\gadres\\Documents\\nodejs\\Nextjs",(error)=>{
if(error){
    throw error;
}
console.log("Directory created");
})
import * as fssync from "fs";
fssync.mkdirSync("C:\\Users\\gadres\\Documents\\nodejs\\Typescript",{recursive:true});
fssync.rmdirSync("C:\\Users\\gadres\\Documents\\nodejs\\Typescript");

import os from 'os';
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.hostname());
console.log(os.networkInterfaces());
console.log(os.freemem());
console.log(os.totalmem());


import {URL} from "url";
const myURL = new URL("https://www.youtube.com/watch?v=EsUL2bfKKLc&t=1s");
console.log(myURL.hash);
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.port);
console.log(myURL.href);
console.log(myURL.protocol);
console.log(myURL.search);
console.log(myURL.searchParams);
console.log(myURL.toString());
console.log(myURL.toJSON());