Node -> free
open-source : has community of collaborators who keep nodejs feature-rich and up-to-date
cross-platform : code can run on any OS(linux,mac,windows)
js runtime environment : built on google chrome v8 engine 
which allows js to run outside browser i.e no use of document 

why Node.js?
Built on js so easy to learn
Scalability : can handle large volume of traffic with ease
performance: known for its speed and performance as it is built on v8
large ecosystem: actively contibute to open source
that can be installed by npm
cross-platform
Useful for real time web applications
no need of .html file as there would be no use of document
directly run your .js files 
using terminal >>>>>>>>>>>>node index.js

//Module wrapper:
Any code you write inside your js will be wrapped
under a IIFE(immediately invoked funtion expression) function
code:
(function(exports,require,module,__filename,__dirame){
    console.log("Hello from iife")
   })(); 
node.js will wrap your module code inside this wrapper function
before it is executedThe variables and functions are made private 
in node.js using the node.js module wrapper function.
for security of variables and functions


