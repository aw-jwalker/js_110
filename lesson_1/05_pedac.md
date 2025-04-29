# Intro to PEDAC

## The Acronym

1. P - Understand the [P]roblem
2. E - [E]xamples and test cases
3. D - [D]ata structure
4. A - [A]lgorithm
5. C - [C]ode

## Problem

### Description

Given a string, write a function changeMe which returns the same
string but with all the words in it that are palindromes uppercased.

```javascript
changeMe("We will meet at noon") === "We will meet at NOON"
changeMe("No palindromes here") === "No palindromes here"
changeMe("") === ""
changeMe("I LOVE my mom and dad equally") === "I LOVE my MOM and DAD equally"
```

* main thing here is to ask question to clarify any implied constraints or expected return values, etc
* for example, mutate original or return new? 

### Inputs/Outputs and Rules

From the problem description and clarifying questions, we can conclude this step with inputs and outputs

**I/O**

* input(s): string
* output(s): new string (not the same object)

**RULES**

1. explicit reqs:
    - palindrome should be converted to all caps
    - they are case sensitive, dont convert Mom
2. implicit reqs:
    - if the string is an empty string, the result should also be an empty string

## Data Structure / Algorithm`

Lets try another example where we can practice the problem, i/o and rules

Given a string, write a function `palindromSubstrings` which returns all the substrings from a given string which are palindromes and 2 or more characters long.
Consider palindrome words case sensitive.

```javascript
// Test cases:

console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]

console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]

console.log(palindromeSubstrings("palindrome"))
// should log: []

console.log(palindromeSubstrings(""))
// should log: []
```

### Problem / Examples

**I/O**

* input: string
* output: list of substrings

**RULES**

1. Explicit
    - Each element is at least two characters
    - palindromes are case sensitive
2. Implicit
    - "all" means subsets, `dd` & `cddc` both count
    - `""` should return `[]`
    - a substring can equal the entire string

### Data Structure / Algorithm

**DATA STRUCTURE**

We use an array of substrings

**ALGORITHM**

> - declare a result variable and initialize it to an empty array
> - create an array named substrARray that contains all of the substrings of the input string that are at least 2 characters long
> - loop through the words in substrArray
> - if the word is palindrome => append to list of results
> - return result arr

*This algorithm is missing detail on the ***hardest part*** which is creating the array of substrings. Lets make placeholder functions for these then return to the algorithm to figure out how they should work*

```javascript
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
```

**ALGORITHM (CONT.)**

Imagine a simple string, such as `halo

We can get the first character, then add every substring starting with that character
- `ha`, `hal`, `halo`
then get second character
- `al`, `alo`
then get third character
- `lo`
then the last character
- `o` is never valid, skip the last character

So we are are seeing nested loops, outer gets the starting character, inner gets the ending character

Lets write the algorithm for substrings

> **function substrings()**
> - takes a string as input
> - let arr = []
> - outer loop, iterate through string from start to length - 2 (second to last char)
>   - inner loop, iterate through string again from outer index to string.length
>     - arr.push(substring(i, (i + j));

Try and use this to write the substrings function

```javascript
function substrings(str) {
  let arr = [];
  for (let i = 0; i <= string.length - 2; i++) {
    for (let j = 1; j < string.length - i; j++) {
      let substring = str.slice(i, i + j);
      arr.push(substring);
    }
  }

  return arr;
}
```

We also need to define `isPalindrome`

> **function isPalindrome()**
> - takes string as input
> - return string === string.split('').reverse().join('');

```javascript
function isPalindrom(str) {
  return str === str.split('').reverse().join('');
}
```

***See `5_palindroms.js` for the completed program***


