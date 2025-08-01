package pascals_triangle

func generate(numRows int) [][]int {
	pascalTriangle := [][]int{{1}}

	for i := 1; i < numRows; i++ {
		row := make([]int, i+1)
		row[0], row[i] = 1, 1
		for j := 1; j < i; j++ {
			row[j] = pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j]
		}
		pascalTriangle = append(pascalTriangle, row)
	}

	return pascalTriangle
}
