function calculate(num1, num2, func) {
    return func(num1, num2);
}

const productOfNumbers = function (num1,num2) {
    return `${num1} * ${num2} = ${num1*num2}`;
}

const divisionOfNumbers = function (num1,num2) {
    return `${num1} / ${num2} = ${num1/num2}`;
}

const additionOfNumbers = function (num1,num2) {
    return `${num1} + ${num2} = ${num1+num2}`;
}
const subtractionOfNumbers = function (num1,num2) {
    return `${num1} - ${num2} = ${num1-num2}`;
}


const operations = {
    product: productOfNumbers,
    division: divisionOfNumbers,
    addition: additionOfNumbers,
    subtraction: subtractionOfNumbers,
};

const selectedOperation = "division";

console.log(calculate(10, 5, operations[selectedOperation]));