// Find the largest number without using Math.max().

const numbers = [12, 45, 7, 89, 23];
let largest = numbers[0];

for (const number of numbers) {
  if (number > largest) {
    largest = number;
  }
}

console.log(largest);
// Output: 89
