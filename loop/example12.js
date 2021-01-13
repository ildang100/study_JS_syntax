const numbers = [10, 20, 30, 40, 50, 60, 70, 80];

let sum = 0;

// 반복문을 사용하는 경우
numbers.forEach(number => sum += number);

console.log(sum);

// reduce 사용하는 경우
const newSum = numbers.reduce((sum, number) => sum + number, 0);

console.log(newSum);