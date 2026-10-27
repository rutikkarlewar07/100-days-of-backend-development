// Check whether a string is a palindrome.

const text = "level";
const reversed = text.split("").reverse().join("");

if (text === reversed) {
  console.log("Palindrome");
} else {
  console.log("Not a palindrome");
}

// Output: Palindrome
