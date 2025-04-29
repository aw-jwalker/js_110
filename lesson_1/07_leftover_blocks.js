function calculateLeftoverBlocks(numBlocks) {
  let remainingBlocks = numBlocks;
  let layer = 1;
  let blocks = 0;
  let keepGoing = true;

  while (keepGoing === true) {
    blocks = layer * layer;
    if (remainingBlocks - blocks < 0) {
      keepGoing = false;
    } else {
      remainingBlocks = remainingBlocks - blocks;
      layer++;
    }
  }

  return remainingBlocks;
}


console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
