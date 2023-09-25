function receivesAFunction(callback) {
    // Call the provided callback function
    callback();
  }
  
  function returnsANamedFunction() {
    // Define and return a named function
    return function namedFunction() {
      console.log("This is a named function");
    };
  }
  
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function () {
      console.log("This is an anonymous function");
    };
  }
  