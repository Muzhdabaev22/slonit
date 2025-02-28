function createLogger() {
  
  const logs = [];

  return {
      
      log(message) {
          logs.push(message);
      },

      
      getLogs() {
          return logs;
      }
  };
}


function createRandomGenerator(min, max) {
  return function() {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  };
}


const randomNumberGenerator = createRandomGenerator(1, 100);
console.log(randomNumberGenerator());
console.log(randomNumberGenerator()); 
