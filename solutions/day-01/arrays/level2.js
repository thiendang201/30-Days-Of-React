//1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";

//2. First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

text = text.replace(/,?\.?/g, "");
const words = text.split(" ");

console.log(words);
console.log(words.length);

//3. In the following shopping cart add, remove, edit items
let shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.includes("Meat") || shoppingCart.unshift("Meat");

// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.includes("Sugar") || shoppingCart.push("Sugar");

// remove 'Honey' if you are allergic to honey
const allergic_to_honey = true;
if (allergic_to_honey)
  shoppingCart = shoppingCart.filter((item) => item != "Honey");

// modify Tea to 'Green Tea'
shoppingCart = shoppingCart.map((item) => (item == "Tea" ? "Green Tea" : item));

console.log(shoppingCart);

//4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
countries.includes("Ethiopia")
  ? console.log("Ethiopia".toUpperCase())
  : countries.push("Ethiopia");

//5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

//6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [...frontEnd, ...backEnd];
console.log(fullStack);
