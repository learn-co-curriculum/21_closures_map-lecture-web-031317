// Object Orientied Programming

//// Our applications consist of objects that receive messages
//// These objects encapsulate state and behavior

// functions are objects

// Functional Programming

//// Our applications consist of functions or procedures that run
//// These procedures should be composable

// Pure Functions
//// 1. Given the same inputs, returns the same thing every time
//// 2. Has no other side effects


function canDrink(age){
  var minimum = 21
  return age >= minimum
}

function createAgeChecker(minimum){
  return function(age){
    return age >= minimum
  }
}

function connectProperty(params){
  return function(obj){
    return Object.assign({}, params, obj)
  }
}


// BUILD A FUNCTION CALLED collect that takes in an array and a callback function
// it should pass each element of the array into the callback function
// and add the return value into a  new array
// and then return the new array

// Do this using a for loop or a while loop - do not use array.forEach or array.map

function collect(array, fn){

}


collect([1, 2, 3], function(num){
  return num * 2
}) // [2, 4, 6]

collect(["Hello", "Hi", "How Are You Doing"], function(greeting){
  return `${greeting} there!`
}) // ["Hello there!", "Hi !", "How Are You Doing there!"]

collect([1, 2, 3], function(){
  return "Hi!"
}) // ["Hi", "Hi", "Hi"]
