// see 5_pedac.md for description

function palindromeSubstrings(str) {
  let result = [];
  let substringsArr = substrings(str);

  substringsArr.forEach(substring => {
    if (isPalindrom(substring)) {
      result.push(substring);
    }
  });

  return result;
}

function substrings(str) {
  let arr = [];
  for (let i = 0; i <= str.length - 2; i++) {
    for (let j = 1; j < str.length - i; j++) {
      let substring = str.slice(i, i + j);
      if (substring.length >= 2) {
        arr.push(substring);
      }
    }
  }

  return arr;
}

function isPalindrom(str) {
  return str === str.split('').reverse().join('');
}

// Test cases:

console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]

console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]

console.log(palindromeSubstrings("palindrome"))
// should log: []

console.log(palindromeSubstrings(""))
// should log: []
