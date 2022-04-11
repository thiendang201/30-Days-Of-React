const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

//2. Imagine you are getting the above users collection from a MongoDB database.
//     a.Create a function called signUp which allows user to add to the collection.If user exists, inform the user that he has already an account.
function signUp({
  _id = new Date().toISOString(),
  username = "no name",
  email,
  password,
  createdAt = new Date().toISOString(),
  isLoggedIn = false,
}) {
  if (!email || !password) return;
  if (users.find((user) => user.email == email)) {
    alert("Email already in use");
    return;
  }
  users.push(arguments[0]);
  alert("Congratulation");
}

// signUp({
//   _id: "ab2yy2ex",
//   username: "Thien",
//   email: "thien@alex.com",
//   password: "123123",
//   createdAt: "08/01/2020 9:00 AM",
//   isLoggedIn: false,
// });
// console.log(users);
//     b.Create a function called signIn which allows user to sign in to the application

function signIn(email, password) {
  isUser = users.find(
    (user) => user.email == email && user.password == password
  );
  if (isUser) {
    alert("Sign In");
    return;
  }
  alert("Incorrect account or password");
}

// signIn("thien@alex.com", "123123");

// The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function rateProduct(product_id, user_id, rate) {
  const { ratings } = products.find((product) => product._id == product_id);
  ratings.push({ user_id, rate });
}

function averageRating(product_id) {
  const { ratings } = products.find((product) => product._id == product_id);

  return ratings.reduce(
    (avgRating, rating) => (avgRating += rating.rate / ratings.length),
    0
  );
}

rateProduct("aegfal", "ab2yy2ex", 4);
console.log(products);
console.log(averageRating("eedfcf"));
// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

function likeProduct(user_id, product_id) {
  const product = products.find((product) => product._id == product_id);
  const userIdIndex = product.likes.findIndex((userID) => user_id == userID);
  userIdIndex != -1
    ? product.likes.splice(userIdIndex, 1)
    : product.likes.push(user_id);
  console.log(product);
}

function userIdGeneratedByUser() {
  const num_chars = prompt("number of characters: ");
  const num_ids = prompt("number of ids: ");
  const userIds = [];
  let userId;

  if (num_chars <= 0 || num_ids <= 0) return;

  for (let i = 0; i < userIds; i++) {
    do {
      userId = CryptoJS.randomBytes(20).toString("hex");
    } while (!userIds.includes(userId));
    userIds.push(userId);
  }

  return userIds;
}

// userIdGeneratedByUser();
