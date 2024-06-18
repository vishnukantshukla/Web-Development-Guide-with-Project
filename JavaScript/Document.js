// Intro to DOM
//purpose of DOM
// DOM is a programming interface for HTML, XML and SVG documents. It provides a structured representation of the document as a tree. The DOM defines methods that allow access to the tree, so that they can change the document structure, style and content. The DOM provides a representation of the document as a structured group of nodes and objects that have properties and methods. Essentially, it connects web pages to scripts or programming languages. Usually that means JavaScript, but modelling HTML, SVG, or XML documents as objects is not part of the JavaScript language. The DOM model represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content. Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.

// How we can access the DOM?
// The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript. The DOM does not depend on a specific programming language, allowing you to manipulate the structure, style, and content of a document. The W3C DOM and WHATWG DOM standards are implemented in most modern browsers. Many web browsers have extensions for DOM inspection.


//fetching element
const myDiv = document.getElementById('my-div');    
console.log(myDiv);
// accesing all the headings by their tags  
const headings = document.getElementsByTagName('h1');
console.log(headings);
// accesing all the elements by their class name
const myClass = document.getElementsByClassName('my-class');
console.log(myClass);   
// accesing all the elements by their class name
const myClass = document.getElementsByClassName('my-class');
console.log(myClass);


