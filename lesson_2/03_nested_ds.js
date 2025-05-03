// nested data structures: collections holding other collections
// dream within a dream....

let arr1 = [[1, 3], 2];
let teams = [['Joe', 'Jennifer'], ['Frank', 'Molly'], ['Dan', 'Sarah']]

console.log(teams[2]);
arr1[0].push(4);
console.log(arr1);

// ways to access nested values
let arr = [['a', ['b']], { b: 'bear', c: 'cat' }, 'cab'];

arr[0];       // => [ 'a', [ 'b' ] ]
arr[0][1][0]; // => 'b'
arr[1];       // => { b: 'bear', c: 'cat' }
arr[1]['b'];  // => 'bear'
arr[1].b[1];  // => 'e'
arr[2][1];    // => 'a'

// "spread syntax" is good for making array copies instead of just making new references
// the following two blocks are the same

{
  let arr = ['a', 'b', 'c'];
  let copyOfArr = arr.slice();
  copyOfArr; // => [ 'a', 'b', 'c' ];

}

{
  let arr = ['a', 'b', 'c'];
  let copyOfArr = [...arr];
  copyOfArr; // => [ 'a', 'b', 'c' ];
}

// only good way to make a deep copy: stringify and parse
{
  let arr = [{ b: 'foo' }, ['bar']];
  let serializedArr = JSON.stringify(arr);
  let deepCopiedArr = JSON.parse(serializedArr);
}

// in JS, no easy way to "deep-freeze" objects :/




