// use Object.freeze(arr) to make the elements of an array immutable
// concat is like push but it returns a new array instead of mutating the calleri
// splice is like a catch all, remove add and insert elements
// need practice with reduce, i guess its like the tool used to build other methods like forEach, map, and filter

{
  let arr = [2, 3, 5, 7];
  let sum = arr.reduce((acc, ele) => acc + ele, 0); // 0 is initial value of acc
  console.log(sum);
}

{
  let strings = ['a', 'b', 'c', 'd'];
  let concatStrs = strings.reduce((acc, ele) => {
    return acc + ele.toUpperCase()
  }, '');
  console.log(concatStrs);
  console.log(Array.isArray(strings));
}


{ // Array.prototype.some and every
  console.log([1, 2, 3].some(num => num > 2));
  console.log([1, 2, 3].every(num => num < 3));
}

{ // Array.prototype.find(callbackFn) returns first element for which the expression returns truthy
  console.log([2, 1, 4, 3, 5].find(num => num > 2));
  console.log([2, 1, 4, 3, 5].findIndex(num => num > 2));
  console.log([2, 1, 4, 3, 5].find(num => num > 11));
  console.log([2, 1, 4, 3, 5].findIndex(num => num > 11));
}

{ // .reverse() mutates the caller
  let nums = [1, 2, 3];
  console.log(nums.reverse());
  console.log(nums);
  let moreNums = [4, 5, 6];
  console.log(moreNums.slice().reverse());
  console.log(moreNums);
}

{ // .includes() good for arrays and objects, not good for findings objects in arrays
  let obj = { a: 'apple', b: 'banana', c: 'custard' };
  console.log(Object.keys(obj).includes('c'));
  console.log(obj.hasOwnProperty('c'));
  console.log(Object.keys(obj).length);
}

{
  let obj = [];
  console.log(Object.keys(obj).length);
}






