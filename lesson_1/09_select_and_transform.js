/* Selection and transformation both use the basics of looping: a loop, a counter, a way to retrieve the current value, and a way to exit the loop. Keep those four things in mind. Also, selection and transformation require criteria that determine the results. Selection needs criteria to determine which elements to select, while transformation uses criteria to determine the transformation. */

// Selection Example:
function getOnes() {
  let numbers = [1, 3, 9, 11, 1, 4, 1];
  let ones = [];

  for (let counter = 0; counter < numbers.length; counter++) {
    let currentNum = numbers[counter];

    if (currentNum === 1) {
      ones.push(currentNum);
    }
  }

  return ones;
}

console.log(getOnes());

{
  function selectVowels(str) {
    let selectedChars = '';

    for (let counter = 0; counter < str.length; counter++) {
      let currentChar = str[counter];
      let vowels = 'aeiouAEIOU';

      if (vowels.includes(currentChar)) {
        selectedChars += currentChar;
      }
    }
    return selectedChars;

  }

  console.log(selectVowels('the quick brown fox').length);
}

// Select key-value pairs wher the value is 'fruit'

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(obj) {


  selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }
