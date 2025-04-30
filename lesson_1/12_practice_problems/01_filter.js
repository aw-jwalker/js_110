// what is the return value of the fulter method call below? Why?

console.log([1, 2, 3].filter(num => 'hi'));
// filter returns the result of the expression on each element
// 'hi' is a truthy value
//  - its not in [false, undefined, null, NaN, 0, -0, 0n, '')
// the expression returns truth for each element, so all elements are returned
// => [1, 2, 3]

