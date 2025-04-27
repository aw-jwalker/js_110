// string.slice((start), end) good for selecting multiple consecutive string characters. end index is exluded

let str = 'abcdefghi';
str[2]; // => 'c'
str.slice(2, 5); // =>'cde'

let str1 = 'The grass is green'

// reference grass

console.log(str1.slice(4, 9));
console.log(str1.slice(13));

// slice works with negative indices, back from end, but substring does not
// the more negative number must be first

console.log(str1.slice(-4, -2)); // => 're'

// for arrays, slice returns a shallow copy, not the original
// shallow means no object or array elements are included

let arr1 = [1, 3, 4, 6, 3];
console.log(arr1.slice(2, 4));
console.log(arr1);

// for objects, we can use Object.entries(obj) to return a 2d array. 
// So we could merge two arrays into an object then call entries
// this is similar to "zipping" arrays together

const obj1 = { foo: "bar", baz: 42 };
console.log(Object.entries(obj1)); // [ ['foo', 'bar'], ['baz', 42] ]

// i think slice might be the easiest way to grab the last element. Since str[-1] doesnt work

console.log(str1.slice(-1));
console.log(arr1.slice(-1));

// best way to differentiate between a non-existent property and a property with value "undefined" is like this:

Object.keys(obj1).includes('foo');
Object.keys(obj1).includes('qux');

// if an object is added to an array, a sngle key:value pair, do u reference is by the array's integer index? or by the key?

let arr2 = ['foo', 'bar', 'qux', { laugh: 'lol' }];
arr2['boo'] = 'hoo';
arr2[-1] = 374;
arr2;               // => [ 'foo', 'bar', 'qux', boo: 'hoo', '-1': 374 ]
arr2.length;        // => 3 (not 5!)
arr2.forEach(element => console.log(element)); // prints: foo, bar, qux
Object.keys(arr2);  // => [ '0', '1', '2', 'boo', '-1' ]
console.log(arr2[3]);
console.log(arr2['boo']);

// way easier way to join arrays, just pass an argument to join...

let arr3 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr3.join()); // => 'a,b,c,d,e,f' // same as using arr3.join(',') - the default argument is comma
console.log(arr3.join(''));
