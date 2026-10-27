// Find duplicate numbers in an array.

const numbers = [1, 2, 3, 2, 4, 5, 1];
const seen = new Set();
const duplicates = new Set();

for (const number of numbers) {
  if (seen.has(number)) {
    duplicates.add(number);
  } else {
    seen.add(number);
  }
}

console.log([...duplicates]);
// Output: [2, 1]
