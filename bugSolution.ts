function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Prints 1, 2, 3, 4, 5

function printNumbersRecursive(n: number): void {
  if (n <= 0) {
    return;
  }
  printNumbersRecursive(n - 1);
  console.log(n);
}

printNumbersRecursive(5); // Prints 1, 2, 3, 4, 5