# Sort Strings by Most Adjacent Consonants

## Problem

### Description
Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants a particular string contains. If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other. Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.

Note that for this problem, the letters 'y' and 'w' should be treated as consonants.

**QUESTIONS / ASSUMPTIONS**

- We want to know, in order, which strings have the most consecutive consonants
- Case inensitive, "Space" insensitive, Tan everywhere, Jan everywhere
- How will I maintain the order if there is a tie?
- We want to use Array.sort() with an arrow function that compares the count of consecutive consonants
- We could maybe do an array of arrays. Where each element is the string, and the number of consecutive consonants
- So we need a function that takes a string and returns and array of that string and the number of consonants, then we push that array into a new array of strings
- Then maybe do sortedArray = arrayOfStrings.toSorted(compareFn)
- can strings be empty?

**I/O**

- input: array of strings
- output array of strings, but sorted

**RULES**

1. Explicit
  - return must be array of strings
  - must be highest consonants desc
  - if a tie, maintain original order
  - w & y are consonants
  - adjacent in same word, or a space between in separate words
  - number of adjacent constants, not number of consonants

2. Implicit
  - case insensitive, space insensitive
  - strings can contain multiple words
  - if there is not two consecutive, the number is 0

## Examples / Test Cases

```javascript
let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa'] => 3, 2, 0, 0

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan'] => 3, 2, 2, 0

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar'] => each has one

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year'] => each has one except month has two
```

