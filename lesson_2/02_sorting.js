let arr1 = [null, 'a', undefined, true, 1];
//console.log(arr1.sort());
// sort with no arguments coerces to string then compares, except undefined, which always goes at tthe end
// sort is destructive
// it sorts, then returns reference to original array, now sorted

// to avoid destroying original, use slice first, then sort

let arr1Sorted = arr1.slice().sort();
console.log(arr1Sorted);
console.log(arr1);

// often times, if there is a side affect (mutating the caller) we expect NO RETURN VALUE (undefined) 
// in this case however, it returns the reference to the orginal array and mutates the caller

// lets write a sorting function with a callback fn as an argument

let nums = [2, 11, 9, 4, 107, 21, 1]
let numsSorted = nums.slice().sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 0;
  } else {
    return 1;
  }
});

console.log(numsSorted);

// this can actually be much more concise, while making it slightly less explicit
// we dont need 1 exactly, we just need positive, negative or 0. 
// if a < b, then a - b is always negative, so on for other cases

let numsSortedSimple = nums.slice().sort((a, b) => a - b);
console.log(numsSortedSimple);

let numsSortedDesc = nums.slice().sort((a, b) => b - a);
console.log(numsSortedDesc);

// inlude additional code, but it must always return a number

let numsSortedExtra = nums.slice().sort((a, b) => {
  console.log(`${a} - ${b} is ${a - b}`);
  return a - b;
})

console.log(numsSortedExtra);

let words = ['go', 'ahead', 'and', 'jump'];
let wordsSorted = words.slice().sort((a, b) => b.length - a.length);
console.log(wordsSorted);

// sort the following array in ascending order of the sum of each subarray
let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
let scoresRanked = scores.slice().sort((a, b) => {
  return a.reduce((acc, ele) => acc += ele) - b.reduce((acc, ele) => acc += ele);
});

console.log(scoresRanked);

