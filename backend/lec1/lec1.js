// Modules in Jvascript
const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");

// want to replace the content in the file
text = text.replace("My", "Backend Tutorial");

console.log("The content of the file is")
console.log(text);

// here we are creating the new file
console.log("creating a new file...");
fs.writeFileSync("backend.txt", text)


// there are three types of modules
// Build -in Modules
// the modules which we can create
// third party modules

// we can use the modules by using the require keyword
// const fs = require("fs");
// fs.readFileSync("dele.txt", "utf-8");

// we can also use the modules by using the import keyword
// import fs from "fs";
// fs.readFileSync("dele.txt", "utf-8");

// what are the third party modules
// these are the modules which are not present in the node js
// we have to install them by using the npm install command
// npm install <module name>
// npm install nodemon
// nodemon is used to run the server automatically

// what are the built in modules
// these are the modules which are present in the node js
// we can use them by using the require keyword
// const fs = require("fs");
// fs.readFileSync("dele.txt", "utf-8");

// what are the modules which we can create
// we can create the modules by using the export keyword
// export const name = "harry";
// export const age = 34;
// export const address = "kolkata";
// export const func = () => {
//     console.log("this is a function");
// }

// we can also create the modules by using the export default keyword
// export default name = "harry";
// export default age = 34;
// export default address = "kolkata";
// export default func = () => {
//     console.log("this is a function");
// }

// we can also create the modules by using the module.exports keyword
// module.exports.name = "harry";
// module.exports.age = 34;
// module.exports.address = "kolkata";
// module.exports.func = () => {
//     console.log("this is a function");
// }

