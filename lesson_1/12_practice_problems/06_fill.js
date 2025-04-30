// how does .fill() work? is it destructive? how can you check?

let arr = [1, 2, 3, 4, 5];
let filledArr = arr.fill(1, 1, 5);
console.log(arr);
console.log(filledArr);

// we can tell its destructive by assigning the return a variable then printing both
// we see they have both been changed, so yet it is destructive
