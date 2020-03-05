//Write a function that takes the current position of a knight on a chessboard, and returns a preliminary list of possible moves 
//the knight could make.

//Create 9*9 matrix which represents the chess board.The function will take positon of knight (x, y) and this position is marked as 1 
//in 2d matrix. The function will compute the possible moves that knight can take and mark each position as 2,3... Function returns the 
// 2d matrix.

const N = 9;
function isValid(x, y)
{
	if (x < 0 || y < 0 || x >= N || y >= N)
		return false;
	return true;
}

function listKnightMoves(x, y) {
   let visited = Array(N).fill(0).map(() => Array(N).fill(0));
	const pos = 1;
	const row = [ 2, 1, -1, -2, -2, -1,  1,  2 , 2 ];
	const col = [ 1, 2,  2,  1, -1, -2, -2, -1, 1 ];
	visited[x][y] = pos;
   let newX, newY;
	for (let k = 0; k < 8; k++)
	{
		newX = x + row[k];
		newY = y + col[k];
		if (isValid(newX, newY) && !visited[newX][newY]) {
        	visited[newX][newY] = ++pos;
        }
	}
    
    return visited;
}

console.log(listKnightMoves(4, 4));

//Write a function to compute the Nth Fibonacci number:

//The dynamic programming approach is better than the recursive approach because it helps in reducing the redundant 
//computations and makes used of the precomputed values.

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




