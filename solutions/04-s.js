// We are not going to dive into a bit of a real world example of using functions
// to return functions. For this function we are going to build the debounce function.
// The debounce function is a wrapper around a function that will only call the passed
// in function after a certain amount of time has passed. This prevents the function from
// being called too often.

function debounce(func, timeout = 300) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const saveData = (data) => {
  console.log(`Saving data... ${JSON.stringify(data)}`);
};

const handleSave = debounce(saveData, 1000);

handleSave({ name: 'Chance' });
// Within the next 5 seconds I decided I wanted to change my name:
handleSave({ name: 'Chancellor' });

// What is debounce useful for?
// - Search inputs
// - Save actions
// - window resize events
