/* {
  // add 1 to every element
  let numbers = [1, 2, 3, 4];
  console.log(numbers);

  let idx = 0;

  while (idx < numbers.length) {
    numbers[idx] = numbers[idx] + 1;
    idx++;
  }

  console.log(numbers);
} */

/* {
  // break the loop using a conditional and break statement
  while (true) {
    let number = Math.floor(10 * Math.random());
    console.log(number);

    if (number === 5) {
      console.log('Exiting...');
      break;
    }
  }
} */

{
  // to iterate over an object, create keys array, iterate over keys
  //  use current key to reference value

  let numberOfPets = {
    dogs: 2,
    cats: 4,
    fish: 1,
    birds: 14
  };

  let pets = Object.keys(numberOfPets);
  let i = 0;

  while (i < pets.length) {
    let pet = pets[i];
    let number = numberOfPets[pet];
    console.log(`I have ${number} ${pet}!`);
    i++
  }

  // we can actually use for/in which is more concise

  for (let currentPet in numberOfPets) {
    let currentPetNumber = numberOfPets[currentPet];
    console.log(`I have ${currentPetNumber} ${currentPet}!`);
  }

}

{
  // GUARD CLAUSE: the first line of the loop body, skips odd numbers
  // continue, break and return can all be used in gaurd clauses
  let numbers = [1, 4, 3, 7, 6, 5, 2, 1];

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) continue; // single line common for guard clause

    let square = numbers[index] * numbers[index];
    console.log(square);
  }
}



