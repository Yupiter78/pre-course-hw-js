let number1 = Math.floor(Math.random() * 100);
const isEvenOrOdd = (number1) => number1 % 2 ? `${number1}: Это нечетное число` : `${number1}: Это четное число`;

console.log(isEvenOrOdd(number1));