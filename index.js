/*
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName);
*/
/*
var favoriteMobile = prompt("Enter your favorite mobile phone:");
var modelLength = favoriteMobile.length;
alert("my favourite mobile phone is:"+ " " + favoriteMobile + " " + "length of string:" + modelLength );
*/
/*
var word = "Pakistani";
var index = word.indexOf("P");
alert("Index of 'P' in 'Pakistani': " + index);
*/
/*
var word = "Hello World";
var lastIndex = word.lastIndexOf("l");
alert("Last index of 'l' in 'Hello World': " + lastIndex);
*/
/*
var word = "Pakistani";
var characterAt3rdIndex = word.charAt(3);
alert("Character at 3rd index in 'Pakistani': " + characterAt3rdIndex);
*/
/*
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
alert("Hello, " + fullName);
*/
/*
var city = "Hyderabad";
var replacedCity = city.replace("Hyder", "Islam");
document.write("City: " + city + "<br>");
document.write(" After Replacement: " + replacedCity + "<br>");
*/
/*
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replacedMessage = message.replaceAll("and", "&");
document.write("Message: " + message + "<br>");
document.write("Replaced Message: " + replacedMessage + "<br>");
*/
/*
var string= "472";
var num = +(string);
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num + "<br>");
*/
/*
var userInput = prompt("Enter text:");
var capitalizedText = userInput.toUpperCase();
document.write("User Input: " + userInput + "<br>");
document.write("Upper case: " + capitalizedText + "<br>");
*/
/*
var userInput = prompt("Enter text:");
var titleCaseText = userInput[0].toUpperCase()+ userInput.slice(1)
document.write("User Input: " + userInput + "<br>");
document.write("Title Case Text: " + titleCaseText + "<br>");
*/
/*
var num = 35.36;
var numStr = num.toString();
var numWithoutDot = numStr.replace(".", "");
document.write("Original Number: " + num + "<br>");
document.write("Number as String: " + numStr + "<br>");
document.write("Number without Dot: " + numWithoutDot + "<br>");
*/

/*
var username = prompt("Enter your username:");
if (!(/[@,.,!]/.test(username))) {
    alert("Username is valid.");
} else {
    alert("Please enter a valid username.");
}*/

/*
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search for:");
var itemFound = false;

for (var i = 0; i < items.length; i++) {
    if (userInput.toLowerCase() === items[i].toLowerCase()) {
        itemFound = true;
        break;
    }
}

if (itemFound) {
    alert("Item found in the list.");
} else {
    alert("Item not found in the list.");
}
*/
/*
var password = prompt("Enter your password:");
if (
    /[0-9]/.test(password) &&
    !/^[0-9]/.test(password) &&
    password.length >= 6
) {
    alert("Password is valid.");
} else {
    alert("Please enter a valid password.");
}*/

/*
var university = "University of Karachi";
var universityArray = university.split(" ");
document.write("Array Elements: " + universityArray + "<br>");
*/
/*
var userInput = prompt("Enter a string:");
var lastCharacter = userInput.charAt(userInput.length - 1);
alert("Last Character: " + lastCharacter);
*/


var inputString = "The quick brown fox jumps over the lazy dog";

inputString = inputString.toLowerCase();
var wordToCount = "the";

var words = inputString.split(" ");

var count = 0;
for (var i = 0; i < words.length; i++) {
    if (words[i] === wordToCount) {
        count++;
    }
}

// Print the count
console.log("Number of occurrences of 'the':", count);
