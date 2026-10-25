const arr = [2, 3, 2, 5, 3, 2, 5];

const uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
  if (!uniqueArr.includes(arr[i])) {
    uniqueArr.push(arr[i]);
  }
}

console.log(uniqueArr);
