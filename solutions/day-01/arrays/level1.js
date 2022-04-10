// Declare an empty array;
const empty_arr = [];

// Declare an array with more than 5 number of elements
const numbers = [1, 2, 3, 4, 5, 6, 7];

// Find the length of your array
console.log(numbers.length);

// Get the first item, the middle item and the last item of the array
console.log("first item: ", numbers[0]);
console.log("middle item: ", numbers[Math.floor(numbers.length / 2)]);
console.log("last item: ", numbers[numbers.length - 1]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
  [1, 2, 3],
  19,
  "hello",
  ["a", "b"],
  { name: "Thien", age: 21 },
  true,
  false,
];
console.log("the length of mixedDataTypes: ", mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log("number of companies: ", itCompanies.length);

// Print the first company, middle and last company
console.log("first company: ", itCompanies[0]);
console.log(
  "middle company: ",
  itCompanies[Math.floor(itCompanies.length / 2)]
);
console.log("last company: ", itCompanies[itCompanies.length - 1]);

// Print out each company
for (let company of itCompanies) {
  console.log(company);
}

// Change each company name to uppercase one by one and print them out
for (let company of itCompanies) {
  console.log(company.toUpperCase());
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
let sentence = itCompanies.join(", ");
sentence = sentence.replace("Amazon", "and Amazon are big IT companies");
console.log(sentence);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

// Filter out companies which have more than one 'o' without the filter method
const companies_more_than_one_o = itCompanies.reduce((arr, current) => {
  const c_company = current.split("");
  return c_company.indexOf("o") != c_company.lastIndexOf("o")
    ? arr.concat(current)
    : arr;
}, []);
console.log(companies_more_than_one_o);

// Sort the array using sort() method
console.log(itCompanies.sort());

// Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
// itCompanies.splice(0, 3);
// console.log(itCompanies);

// Slice out the last 3 companies from the array
// itCompanies.splice(itCompanies.length - 3, 3);
// console.log(itCompanies);

// Slice out the middle IT company or companies from the array
index = Math.floor(itCompanies.length / 2);
itCompanies.length % 2 == 0
  ? itCompanies.splice(index, 2)
  : itCompanies.splice(index, 1);
console.log(itCompanies);

// Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

// Remove the middle IT company or companies from the array
index = Math.floor(itCompanies.length / 2);
itCompanies.length % 2 == 0
  ? itCompanies.splice(index, 2)
  : itCompanies.splice(index, 1);
console.log(itCompanies);

// Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

// Remove all IT companies
itCompanies.length = 0;
console.log(itCompanies);
