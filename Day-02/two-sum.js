const arr = [2, 7, 11, 15];
const target = 9;

const seen = {};

for (let i = 0; i < arr.length; i++) {
  const need = target - arr[i];

  if (seen[need] !== undefined) {
    console.log([seen[need], i]);
    break;
  }

  seen[arr[i]] = i;
}
