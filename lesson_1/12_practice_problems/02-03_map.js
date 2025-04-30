// what is the return value of map, why?

console.log([1, 2, 3].map(num => {
  num * num;

}));

// similar to filter, returns result of the expression for each element
// HOWEVER, if curly braces are used, an explicit return statement is required
// return => [undefined, undefined, undefined]

// compare with implicit return statement

console.log([1, 2, 3].map(num => num * num));
