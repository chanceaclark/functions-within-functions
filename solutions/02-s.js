// In the previous exercises, we created a function that calls a function within.
// We will now create a function takes a function as an argument and invoke it.

// Create a function called logGreeting3 that takes in your name and a function
// that returns your favorite food. Within the function, print a sentence that
// contains your name and your favorite food from the function passed in.
//
// Call logGrettting3 with your name and a function that returns your favorite food.

const logGreeting3 = (name, getFavoriteFood) => {
  const favoriteFood = getFavoriteFood();

  console.log(`Hello! My name is ${name} and my favorite food is ${favoriteFood}.`);
};

logGreeting3('Chancellor', () => {
  return 'sushi';
});

// You can even define a function and pass it in without invoking it.
const getMyFavoriteFood = () => {
  return 'sushi';
};

logGreeting3('Chancellor', getMyFavoriteFood);
