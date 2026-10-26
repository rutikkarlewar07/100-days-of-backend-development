const arr = [2, 5, 3, 2, 7, 5, 8, 3];

const seen = {};
const duplicates = [];

for (let i = 0; i < arr.length; i++) {
  if (seen[arr[i]]) {
    if (!duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
  } else {
    seen[arr[i]] = true;
  }
}

console.log(duplicates);
