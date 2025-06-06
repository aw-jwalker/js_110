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

{
  // Select key-value pairs where the value is 'fruit'
  /*
   * Algorithm:
   * iterate through keys
   * check value of produce keys of i against 'fruit'
   * if equal, add key-value pair to fruits object
   * return fruits
   */

  let produce = {
    apple: 'Fruit',
    carrot: 'Vegetable',
    pear: 'Fruit',
    broccoli: 'Vegetable'
  };

  function selectFruit(obj) {
    let fruits = {};
    let produceKeys = Object.keys(produce);

    for (let i = 0; i < produceKeys.length; i++) {
      if (produce[produceKeys[i]] === 'Fruit') {
        fruits[produceKeys[i]] = produce[produceKeys[i]];
      }
    }

    return fruits;
  }

  console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

}

{
  function doubleNumbers(numbers) {
    let doubledNums = [];
    let counter = 0;

    while (counter < numbers.length) {
      let currentNum = numbers[counter];
      doubledNums.push(currentNum * 2);

      counter++;
    }

    return doubledNums
  }

  console.log(doubleNumbers([1, 4, 3, 7, 2, 6]));

  function doubleNums(numbers) {
    let counter = 0;

    while (counter < numbers.length) {
      numbers[i] *= 2;
      counter++;
    }
  }


}

{
  function multNums(numbers, multiplier) {
    let multipliedNums = [];
    let counter = 0;

    while (counter < numbers.length) {
      let currentNum = numbers[counter];
      multipliedNums.push(currentNum * multiplier);

      counter++;
    }

    return multipliedNums
  }

  let numbers = [1, 4, 3, 7, 2, 6];
  console.log(multNums(numbers, 4));
}


