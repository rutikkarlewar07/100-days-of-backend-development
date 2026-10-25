const arr = [2, 3, 2, 5, 3, 2, 5];

const counts = {};

for (let i = 0; i < arr.length; i++) {
  const num = arr[i];

  if (counts[num] === undefined) {
    counts[num] = 1;
  } else {
    counts[num]++;
  }
}

let maxCount = 0;
let mostFrequent;

for (const num in counts) {
  if (counts[num] > maxCount) {
    maxCount = counts[num];
    mostFrequent = num;
  }
}

console.log("Most frequent number:", mostFrequent);
console.log("Count:", maxCount);
