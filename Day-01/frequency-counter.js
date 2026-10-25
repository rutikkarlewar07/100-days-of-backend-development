const arr = [2, 3, 2, 5, 3, 2];
const counts = {};

for (let i = 0; i < arr.length; i++) {
  const num = arr[i];

  if (counts[num] === undefined) {
    counts[num] = 1;
  } else {
    counts[num]++;
  }
}

console.log(counts);
