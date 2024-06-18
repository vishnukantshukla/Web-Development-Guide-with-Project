//**Synchronous or blocking*** */ 
// - line by line execution
// - execution of next line only after current line is finished
// - functions that take long time to execute are called blocking functions

/** Asynchronous or non-blocking**/ 
// - line by line execution not guaranteed
// - callbacks will fire
// - callbacks are kept in check by node apis
// - async functions are handled by node apis


const fs = require("fs");

//let text = fs.readFile("dele.txt", "utf-8");
// read file is expecting a callback function , so we write the call back function

fs.readFile("dele.txt", "utf-8", (err, data) => {
    console.log(data);// this is the asynchronous mode
});
console.log("This is a message")
// this will give us a  invalid callback error

/**       About Node js        *****/
// node js work non-blocking io methods
// node js work on single thread
// node js work on asynchronous programming
// node js work on event loop
// node js work on callback function

// callback function is a function that is passed as an argument to another function
// and is executed after some operation is completed
// callback function is used to notify the calling function that some operation is completed

/**    difference between blocking and non-blocking    **/
/* Blocking: A process waits for its turn to be scheduled before it can continue.

Non-Blocking: A process doesn’t wait for its turn and can’t be scheduled.

Blocking is the default behavior of Node.js functions. When a blocking function is invoked,
it returns only after finishing its execution. This means the program is blocked until the
function returns and it is not available to process any other requests.*/

// blocking is synchronous and non-blocking is asynchronous
// blocking is line by line execution and non-blocking is not line by line execution
// blocking is slower and non-blocking is faster
// blocking is wait and non-blocking is no wait
// blocking is wait for i/o and non-blocking is no wait for i/o
// blocking is cpu intensive and non-blocking is not cpu intensive
// blocking is used in readfile and non-blocking is used in readfileSync
// blocking is used in readfileSync and non-blocking is used in readfile
