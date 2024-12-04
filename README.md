# TypeScript Recursion Error: Stack Overflow

This repository demonstrates a common error in recursive functions in TypeScript:  forgetting a base case.  The `bug.ts` file shows an example of a recursive function that will cause a stack overflow error because it lacks a proper base case to stop the recursion. The `bugSolution.ts` file provides the correct implementation.

The error is a classic example of how neglecting a base case in a recursive function can lead to uncontrolled recursion and ultimately a stack overflow. This is a frequent mistake among developers new to recursion.

## How to reproduce

1. Clone this repository
2. Navigate to the repository's directory.
3. Compile and run the code using a TypeScript compiler (e.g., `tsc bug.ts && node bug.js`).