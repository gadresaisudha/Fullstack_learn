path module -> inbuilt module
path.basename(" C:\\Users\\index.js"); 
gives the last file or portion of path ---index.js
path.basename(" C:\\Users\\index.js",".js"); 
gives the last file name without extension ---index
path.dirname("C:\\Users\\index.js")
gives the full path till the directory
path.extname("C:\\Users\\index.js")
gives the extension name
console.log(path.join("C:","Users","index.js"));
gives the path from the specified name above
path.join("C:","Users","index.js","..")
gives path just above the last given filename
path.normalize("C:\\\\\Users\\\index.js\\")
normalizes the path and gives it in correct way
path.parse("C:\\Users\\index.js")
gives the parsed info like root,base,name,ext in json format

FS module ->inbuilt filesysytem module
It has 3 apis
1.Promise apis
2. Callback apis
3. sync apis
1.promise api 
provides asynchronous filesysytem methods that return promises
for this we use the import
import * as fs from "fs/promises";
Inorder to create actual directory on your system use following approach
try{
    await fs.mkdir('C:\\Users\\gadres\\Documents\\nodejs');
    console.log('folder created');
}
catch(error){
 console.log(error);
}
The await operator is used to wait for a Promise and get its fulfillment value.
In the above case we create a nodejs folder but if want to create a set of folders 
then we need to use recursive parameter
await fs.mkdir('C:\\Users\\gadres\\Documents\\nodejs\\Expressjs\\Code',{recursive:true});
creates a set of last 3 new folders
TO read the content of directory i.e all the filenames inside directory
try{
    const files = await fs.readdir('C:\\Users\\gadres\\Documents\\nodejs\\Expressjs\\Code');
    for (const file of files){
        console.log(file)
    }
}
catch(error){
 console.log(error);
}
To remove directory the directory needs to be empty if not throws error
try{
    await fs.rmdir('C:\\Users\\gadres\\Documents\\nodejs\\Expressjs\\Code\\Courses');
}
catch(error){
 console.log(error);
}
To create files and write to the files
try{
    await fs.writeFile('Reaadme.md',"Hello Nodejs");
}
catch(error){
 console.log(error);
}
file gets created and in the prsent folder where we run our js file
and content is inserted
To read from a file
try{
    const data  = await fs.readFile('Reaadme.md','utf-8');
    console.log(data);
}
catch(error){
 console.log(error);
}
we should use utf-8 for actual data if not gives us somekind of buffer data
To append data to the file
try{
    await fs.appendFile('Reaadme.md',"Nodejs is the best");
}
catch(error){
 console.log(error);
}
To copy data from one to another file
try{
    await fs.copyFile('Reaadme.md','info.txt');
}
catch(error){
 console.log(error);
}
if the new file is not present it creates it apart from copying content
To get the file information and all its statistics
try{
    const info = fs.stat('info.txt');
    console.log(info);
    console.log(info.isDirectory());
    console.log(info.isFile());
}
catch(error){
 console.log(error);
}
2. Callback apis
When a Callback API is called, the responder 
must handle the request and provide a response that 
conforms to what the caller expects.
for this import fs from just fs
import * as fscall from "fs";
No need to write try and catch block you can specify 
a callback function if error occurs
import * as fscall from "fs";
fscall.mkdir("C:\\Users\\gadres\\Documents\\nodejs\\Nextjs",(error)=>{
if(error){
    throw error;
}
console.log("Directory created");
})
3.sync apis
A synchronous API is an interface that processes requests sequentially, 
requiring each operation to be completed before the next one can begin.
import * as fssync from "fs";
fssync.mkdirSync("C:\\Users\\gadres\\Documents\\nodejs\\Typescript",{recursive:true});
TO remove directory:
fssync.rmdirSync("C:\\Users\\gadres\\Documents\\nodejs\\Typescript");


Os module -> inbuilt module
gives the metadata details about your Os
import os from 'os';
some of the methods
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.hostname());
console.log(os.networkInterfaces());
console.log(os.freemem());
console.log(os.totalmem());


URL - module - inbuilt
Uniform resource locator
import {URL} from "url";
Here URL is the constructor 
so need to send an actual url as parameter
const myURL = new URL(url)
other methods:
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