
const numbers = [1,2,3,4,5];

function myFilter(array, callback) {
    let result = [];
    for (let num of array) {
        if (callback(num)) { result.push(num) };
    };
    return result;
}


const evenNumbers = myFilter(numbers, num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]


const greaterThanThree = myFilter(numbers, num => num > 3)
console.log(greaterThanThree); // [4, 5]