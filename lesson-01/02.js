let number = Math.floor(Math.random() * 100);
const isEven = (num) => num % 2 ? `${num}: Это нечетное число` : `${num}: Это четное число`;

console.log(isEven(number));