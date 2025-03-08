React:
It is a javascript library for building UI
Developed by Facebook 2011
Use Components model
Build Modular Apps
Learn once write anywhere

React is most popular,powerful frontend library developed and sponsored by facebook

Component model:
a component is a piece of UI that has its own logic and appearance. A component can be a small as a button, or large as an entire page.

seperatiom of concern:
make a component that has html,css,js in it so that we can use the component anywhere we want

learn once write anywhere: React Native - mobile
React Desktop - desktop and React 360 for VR

To maintain versions of react-app:
npm install react-scripts@latest

setup reactjs:
nodejs install on machine for respective OS
vscode

in Terminal vscode to create react app
 >>>>>npx create-react-app react-learn
cd react-learn

To start app
>>> npm start

structure:
react-learn
|-node_modules
|-public
|-src


node-modules: it contains all the project dependencies for which our react depends on
react ,react-dom ....
and also will install more into our node-modules
public : stores all our static files
contains index.html file
<div id="root"></div>
we have the root id to which we append all our code that bundled inside our index.js
src :
under src we have index.js and App.js
inside index.js we get the root by id and then render everything inside it which will be our App component.
Inside App.js we have our actual code and all other child components

Components:
Components are the building blocks of React applications. They let us split the UI into independent, reusable pieces, and think about each piece in isolation.
React application and a typical webpage built with react might me made up of several different components where each component is normally self-contained section of content.
For example a navbar in a website might be a component, an article might be component, a footer may be one and a sidebar maybe one.
So it is our job to create these components so they are rendered to the DOM and shown in webpage by react.
Each component contains
1. template
2. Logic
i.e its a combo(html+js) where you can deliver the html with js logic included on click of button or so on....
As discussed before in index.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
basically its rendering the App component that has actual content to Dom at root position
In App.js you can see that it is basically a function called App(always capital first letter) it is returning a html template
But its not called html although there are some similarities its called as JSX

JSX :
jsx easily allows us to create these html style templates and  components in the background a transplier called babel converts the jsx template into html and render to DOM
Big difference between html and jsx is that we add className instead of class for css styling as class is reserved keyword in javascript at the end of the day we are in a javascript file. Although the compiler converts it to class when you see the whole DOM using inspect in browser
At the end always export the component so that other files can use it and always import the component to use it

summary:
react app is made up of components.
Intially we have index.html that has id as root
Then inside index.js we make sure to render our component App in DOM at root id
Now App is a component which is combination of template and logic so basically a js file but uses the JSX template for html rendering