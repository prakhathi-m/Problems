//Write a function to compute the Nth Fibonacci number
//The dynamic programming approach is better than the recursive approach because it helps in reducing the redundant computations and makes used of the precomputed values.

function fibnocci(n) {
   let fib = [0, 1];
   if (n<2) {
     return n;
   }
   for (let i = 2; i < n + 1; i++){
    fib.push(fib[i - 2] + fib[i -1]);
  }
 return fib[n];
}
console.log(fibnocci(8));
