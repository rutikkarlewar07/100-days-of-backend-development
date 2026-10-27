// Count how many times each character appears in a string.

const text = "hello";
const frequency = {};

for (const char of text) {
  frequency[char] = (frequency[char] || 0) + 1;
}

console.log(frequency);
// Output: { h: 1, e: 1, l: 2, o: 1 }
