// const matrix = [
//   [1, 2, 4],
//   [5, 6, 7, 8],
//   [9, 12],
//  ]

 function towelSort(matrix) {
  let sortedArr = []
  
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      let columnIdx = i % 2 ===0
        ? j
        : (matrix[i].length - j - 1)

        sortedArr.push(matrix[i][columnIdx])
    }
  }
  return sortedArr
 }

//  console.log(towelSort(matrix))

module.exports = function towelSort (matrix) {
  return [];
}
