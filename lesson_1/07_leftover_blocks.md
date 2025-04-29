# Leftover Blocks

## Problem

**DESCRIPTION**

You have a number of building blocks that can be used to build a valid structure. There are certain rules about what determines the validity of a structure:

- The building blocks are cubes
- The structure is built in layers
- The top layer is a single block
- A block in an upper layer must be supported by four blocks in a lower layer
- A block in a lower layer can support more than one block in an upper layer
- You cannot leave gaps between blocks
- Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after building the tallest possible valid structure.

**QUESTIONS/ASSUMPTIONS**
- assumed that a layer is a 2D grid of cubes, explains 4:1 ratio
- is a lower layer valid if it has extra blocks (if so, remaining could always be 0)
- will there always be leftovers? (partially depends on previous question)

**I/O**

- input: a *number* of cubes
- - calculate tallest possible structure
- output: *number* of cubes leftover

**RULES**

1. Explicit
  - the top layer is a single block
  - structure is built in layers (rather than vertical, left to right...)
  - 1:4 ratio of block to supporting blocks
  - 1 block can support up many blocks
  - no gaps between blocks

2. Implicit
  - a layer is a 2D array of rows and columns
  - there must be a top layer (1 block)
  - the second layer is only 4 blocks

**SIDE VIEW**
```
        ---
      --- --- 
    --- --- ---
```


