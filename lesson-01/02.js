let number1 = Math.floor(Math.random() * 100);
const isEvenOrOdd = (num) => num % 2 ? `${num}: Это нечетное число` : `${num}: Это четное число`;

console.log(isEvenOrOdd(number1));