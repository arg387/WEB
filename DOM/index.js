// DOM = Document object model
// DOM is like a document with logical tree.Each branch of the tree ends in a node, and each node contains objects.Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.
// Object{} that represents the page you see in the web browser and provides you with an API to interact with it. 
//Web browser constructs the DOM when it loads an HTML document,and structures all the elements in a tree-like representation. 

//JavaScript can access the DOM to dynamically to change the content, structure and style of a web page.  
document.title = "My website";
document.body.style.backgroundColor = "hsl(0,0%,15%)";
const username = "Bro Cs";
const welcomeMsg = document.getElementById("welcome-Msg");
welcomeMsg.innerHTML += username === "" ? 'Guest' : ` here ${username}`;
console.dir(document);
console.log(document);
