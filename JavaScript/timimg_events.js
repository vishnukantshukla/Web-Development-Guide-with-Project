// Timing Events
// 1. setTimeout() - Executes a function, after waiting a specified number of milliseconds.
// 2. setInterval() - Same as setTimeout(), but repeats the execution of the function continuously.
// 3. clearTimeout() - Stops the execution of the function specified in setTimeout().
// 4. clearInterval() - Stops the execution of the function specified in setInterval().
var sec = 1;
function sayHello() {
    console.log("hello", sec);
    sec++;
    if (sec == 6) {
        //stop
        clearInterval(id);// it is the instance where we want to stop the function
    }
}
//setTimeout(sayHello, 2000);
// when the time interval got over it will execute the function once

/*
setTimeout() method takes two parameters, the first parameter is a function and the second parameter is the number of milliseconds after which the function should be executed.
The setTimeout() method returns a unique id (timeoutId) which can be used later to stop the execution of the function using the clearTimeout() method.
The setTimeout() method is asynchronous which means that the execution of the script will not wait for the setTimeout() method to finish.
The setTimeout() method is used to schedule the execution of a function after a specified delay in milliseconds.
*/

// clearTimeout() method takes the timeoutId as a parameter and stops the execution of the function specified in the setTimeout() method.
// clearTimeout() method is used to cancel the setTimeout() method.

 var id=setInterval(sayHello, 1000);// it execute teh function in repeated intervals
// when the time interval got over it will execute the function in repeated intervals
