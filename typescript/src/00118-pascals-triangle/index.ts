/**
 * # 118. Pascal's Triangle
 *
 * @description
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 *
 * ![Pascal Triangle](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)
 *
 * @example
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * @example
 * Input: numRows = 1
 * Output: [[1]]
 *
 * @function generate
 * @param numRows
 * @returns
 */
function generate(numRows: number): number[][] {
  const pascalTriangle: number[][] = [[1]];
  for (let i = 1; i < numRows; i++) {
    const row = new Array<number>(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      row[j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
    }
    pascalTriangle.push(row);
  }
  return pascalTriangle;
}

export { generate };
