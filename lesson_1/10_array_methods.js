{
  let numbers = [1, 2, 3];
  let counter = 0;

  while (counter < numbers.length) {
    console.log(numbers[counter]);
    counter++
  }

  numbers.forEach(number => console.log(number));
}

{
  // for strings, split first then forEach

  let str = 'abcd';
  str.split('').forEach(char => {
    console.log(char);
  });
}

{
  let produce = {
    apple: 'Fruit',
    carrot: 'Vegetable',
    pear: 'Fruit',
    broccoli: 'Vegetable'
  }

  Object.values(produce).forEach(value => console.log(value));
  Object.keys(produce).forEach(key => console.log(key));
  Object.entries(produce).forEach(entry => console.log(entry));

  Object.entries(produce).forEach(entry => console.log(`${entry[0]} is a ${entry[1]}`));
  Object.entries(produce).forEach(entry => {
    let [key, value] = entry; // array destructuring assignment
    console.log(`${key} is a ${value}`);
  });
}

// forEach returns undefined btw

// dont use forEach if you want to terminate the loop early

{
  let numbers = [1, 2, 3];
  let oddNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      oddNumbers.push(numbers[i]);
    }
  }

  console.log(oddNumbers);


}

{
  // filter pushes the element if the expression is truthy
  // this means !== undefined, null, NaN, 0, -0, 0n, '', or false

  let numbers = [1, 2, 3];
  let oddNumbers = numbers.filter(num => num % 2 === 1);
  console.log(oddNumbers);
}

{
  // .map() is like .filter() but its for transforming instead of selecting

  let numbers = [1, 2, 3];
  let mult = 4;
  let products = numbers.map(num => num * mult);
  console.log('products');
  console.log(products);
  let isOdd = numbers.map(num => num % 2 === 1);
  console.log('num is odd');
  console.log(isOdd);
}

{
  // for strings, use split().map().join() or filter instead of map

  let str = 'Whats up doc?';
  let ssttrr = str.split('').map(char => char + char).join('');
  console.log(ssttrr);
}



