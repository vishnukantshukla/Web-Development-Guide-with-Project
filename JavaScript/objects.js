// objects are the key value pairs, we can add the new key to the object too
var student = {
    name: "abc",
    rollNo: 135,
    marks: 90
};
console.log(student);
// to access the one property of an object
console.log(student.name);
// all the keys are string

// ways of creating the empty object
var obj = {};
var obj1 = new Object();
console.log(obj);
console.log(obj1);

function printProperty(obj, prop) {
    // with this we can get the property of the object
    console.log(obj[ prop ]);
}

var property = "marks";
printProperty(student, property);

// to Delete a property from an Object
delete student.marks;
console.log(student);

// to check the property is present in the object or not
console.log("name" in student);
console.log("marks" in student);

// how are the objects stored
// objects are stored in the heap memory
// and the reference of the object is stored in the stack memory
// so when we assign the object to the other variable then the reference of the object is copied to the other variable
// so both the variable points to the same object
var obj2 = student;
console.log(obj2);
obj2.name = "xyz";
console.log(student);

// To check that the both objects are equal or not
// we can not compare the objects directly
// we can compare the reference of the objects
console.log(obj2 == student);

//Iterating over the Object
// for in loop is used to iterate over the object
for (var key in student) {
    console.log(key);
    console.log(student[ key ]);
}
// To check all keys that object have
console.log(Object.keys(student));

//Arrays and Object
// arrays are the special type of the objects
// arrays are the objects with the keys as the index
// arrays are the objects with the keys as the numbers
// arrays are the objects with the keys as the strings
// arrays are the objects with the keys as the symbols
var arr = [ 20, 30, 40, 50 ];   
console.log(arr);
console.log(arr[ 0 ]);
// Adding string to array
arr[ 4 ] = "abc";
console.log(arr);

//Iterating over using for in loops 
for (var key in arr) {
    console.log(key);
    console.log(arr[ key ]);
}
// calculating the length of the array  
console.log(arr.length);




