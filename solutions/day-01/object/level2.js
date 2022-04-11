const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// Find the person who has many skills in the users object.
const user_has_many_skills = [];
for (let person in users) {
  users[person].skills.length > 1 && user_has_many_skills.push(users[person]);
}

console.log(user_has_many_skills);

// Count logged in users,count users having greater than equal to 50 points from the following object.
let logged_users = 0;
let users_50 = 0;
for (let person in users) {
  users[person].isLoggedIn && (logged_users += 1);
  users[person].points && (users_50 += 1);
}

console.log(logged_users, users_50);

// Find people who are MERN stack developer from the users object
const MERN_stack = ["MongoDB", "Express", "React", "Node"];
const MERN_stack_dev = [];
for (let person in users) {
  users[person].skills.includes(...MERN_stack) &&
    MERN_stack_dev.push(users[person]);
}
console.log(MERN_stack_dev);
// Set your name in the users object without modifying the original users object
users.Thien = { email: "thiendang201@gmail.com" };

// Get all keys or properties of users object
console.log(Object.keys(users));

// Get all the values of users object
console.log(Object.values(users));

// Use the countries object to print a country name, capital, populations and languages.
