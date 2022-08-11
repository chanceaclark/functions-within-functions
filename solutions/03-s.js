// We have now seen how to pass a function and call it within a function.
// Now we will see how to return a function from a function.

// Create a function called powerize that takes in an exponent.
// In the powerize function, return a function that takes in a base and
// returns the base raised to the power of the passed exponent.

const powerize = (exponent) => {
  return (base) => {
    return base ** exponent;
  };
};

const powBase2 = powerize(2);

console.log(powBase2(2));
console.log(powBase2(4));
console.log(powBase2(6));

// This is a concept called a closure. It's an important and powerful
// concept in JavaScript.
//
// MDNs definition of a closure:
// A closure is the combination of a function bundled together
// (enclosed) with references to its surrounding state (the lexical
// environment). In other words, a closure gives you access to an outer
// function's scope from an inner function. In JavaScript, closures
// are created every time a function is created, at function creation time.
//
// This is a big mumbo-jumbo, but to simplify it...
// When we pass a initial exponent into powerize,
// the variable is stored within the return of the function.
//
// const powBase2 = powerize(2);
//
// powBase2 is equivalent to:
// const powBase2 = (base) => {
//   return base ** 2;
// }

// Some examples of closures:
// - React components
// - API requests/Promises
// - Event handlers
// - Callbacks
// - Recursion
