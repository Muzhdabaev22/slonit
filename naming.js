function calculateSum(array) {
    let sum = 0;
    array.forEach(number => {
      sum += number;
    });
    return sum;
  }
  
let numbers = [10000, 20000, 30000];
console.log(calculateSum(numbers));