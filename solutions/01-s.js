// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.

const logGreeting = () => {
  console.log('Hello!');
};

logGreeting();

// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.

const getName = () => {
  return 'Chancellor';
};

// Alternative
// const getName = () => "Chancellor";

console.log(getName());

// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().

const logGreeting2 = () => {
  const name = getName();

  console.log(`Hello! My name is ${name}.`);
};

logGreeting2();
