/* What is the callback's return value in the following code? Also, what is the return value of every in this code? */

console.log([1, 2, 3].every(num => {
  return num = num * 2;
}));

// here `num = num * 2` is called an assignment expression
// assn. expresssions evaluate to the right side of the `=`
// so the callback evaluates to each of the elements, doubled
// Each elements double is truthy, so every === true
