// .includes takes an arg for where to start looking, useful if you want to ignore indices that you have already checked
console.log('abcdefg'.includes('b', 2));

// trim whitespace after getting user input, including \n or \t
console.log(' \nabcdef\t   '.trim());

// how to captilize the first character:

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalize('pete')); // => 'Pete'

console.log(String.fromCharCode(97));




