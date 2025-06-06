function countMaxAdjacentConsonants(str) {
  let count = 0;
  let consonants = 'bcdfghjklmnpqrstvwxyz';
  let strNoSpaces = str.split(' ').join('');
  let maxCount = 0;

  for (let i = 1; i < strNoSpaces.length; i++) {
    if (consonants.indexOf(strNoSpaces[i]) !== -1 && consonants.indexOf(strNoSpaces[i - 1]) !== -1) {
      count += 1;
    } else {
      count = 0;
    }

    if (count > maxCount) {
      maxCount = count;
    }

  }

  return [str, maxCount];
}


function sortStringsByConsonants(list) {
  let strCounts = [];
  for (let i = 0; i < list.length; i++) {
    strCounts.push(countMaxAdjacentConsonants(list[i]));
  }

  let strCountsSorted = strCounts.sort((a, b) => b[1] - a[1]);
  let strSorted = [];

  for (let j = 0; j < strCountsSorted.length; j++) {
    strSorted.push(strCountsSorted[j][0]);
  }

  return strSorted;
}


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
