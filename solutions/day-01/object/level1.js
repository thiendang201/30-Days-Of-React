// Create an empty object called dog
const dog = {};
// Print the the dog object on the console
console.log(dog);
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "cau vang";
dog.color = "yellow";
dog.age = 2;
dog.legs = 4;
dog.bark = () => "woof woof";
// Get name, legs, color, age and bark value from the dog object
console.log(Object.entries(dog));

// Set new properties the dog object: breed, getDogInfo
dog.breed = "Viet Nam";
dog.getDogInfo = function () {
  return `${this.name} is a ${this.breed} dog.\n`;
};

console.log(dog);
console.log(dog.getDogInfo());
console.log(dog.bark());
