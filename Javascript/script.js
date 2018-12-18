/*
  -----------------------------------------------------------------------------
  PRIMITIVE DATA TYPES

  Boolean true or false
  number 1,52,25.3
  String "hello"
  -----------------------------------------------------------------------------
  VARIABLES AND PROMPTS

  variables use the keyword var or can use the keyword let to create a variable
  that will be available inside a certain scope

  variable naming convention:

  * variables must use meaningful names
  * variables can't beguin with a number
  * variable names can't have spaces
  * variable names can only contain letters numbers _ or $
  * variable names make use of Camnmel Casing

  prompts allow us to get an input from a user
  var name = prompt("What is your name");
-----------------------------------------------------------------------------
*/

var message = "Hello";

var myName = "william";

/*
  var yourName = prompt("What is your name?");

  alert("My name is " + myName + ", welcome to my course " + yourName + "!");

 */

 //String Methods

 //  **** String length

var tweet = prompt("Create a tweet:");

var tweetCount = tweet.length;

alert("You have typed " + tweetCount + " characters, you have " +
     (140 - tweetCount) + " characters remaining.");

// **** String Slicing

var tweetUnder140 = tweet.slice(0,140);

alert(tweetUnder140);

// **** String upper casing or lower casing

myName = myName.toUpperCase();

myName = myName.toLowerCase();

myName = myName.charAt(0).toUpperCase();

// Numbers and operations

var sum = 4 + 6;

var substract = 4 - 6;

var mult = 4 * 6;

var div = 4 / 6;

var mod = 4 % 6;

// Increment and decrement operators

var x = 1;

x++;

x--;

x += 4;

x -= 4;

x *= 4;

x /= 4;


// Functions  without parameters

function getMilk(){
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

// Function with parameter

function getMilk(money){
  var milkPrice = 1.5;
  var bottle = Math.floor(money /milkPrice);
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + bottles + " bottles of Milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

//Function with Return

function getMilk(money){
  var milkPrice = 1.5;
  var bottle = Math.floor(money /milkPrice);
  var change = money % milkPrice;
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + bottles + " bottles of Milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return change;
}

var change = getMilk(4); // change should be 1
