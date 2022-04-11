import { countries } from "./countries.js";

//1. The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a, b) => a - b);

const min_age = ages[0];
const max_age = ages[ages.length - 1];

let index = Math.floor(ages.length / 2);
const median_age =
  ages.length % 2 == 0 ? (ages[index] + ages[index + 1]) / 2 : ages[index];
const average_age = ages.reduce((avg, age) => (avg += age / ages.length), 0);
const range = max_age - min_age;

const min_avg = Math.abs(min_age - average_age);
const max_avg = Math.abs(max_age - average_age);

if (min_avg > max_avg) console.log("min_avg > max_avg");
if (min_avg < max_avg) console.log("min_avg < max_avg");
if (min_avg == max_avg) console.log("min_avg = max_avg");

console.log(ages, min_age, max_age, median_age, average_age, range);

//2. Slice the first ten countries
console.log(countries.slice(0, 10));

//3, Find the middle country(ies)
index = Math.floor(countries.length / 2);
console.log(
  countries.length % 2 == 0
    ? countries.slice(index, index + 1)
    : countries[index]
);

const last_half = countries.slice(index);
const first_half =
  countries.length % 2 == 0
    ? countries.slice(0, index)
    : countries.slice(0, index).concat("New country");

console.log(last_half);
console.log(first_half);
