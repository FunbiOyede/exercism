//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/**
 * 
 * @param {Number} rowNum 
 * @description gets triangle for each row
 * @example row(4) returns [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ] ]
 */
export const rows = (rowNum) => {
  let triangle =  [[1],[1,1]];
  if(rowNum === 0){
    return []
  }else if(rowNum === 1){
    return [[1]]
  }else if(rowNum === 2){
    return [[1],[1,1]]
  }else{
    for(let i = 2; i < rowNum; i++){
      addRows(triangle)
    }
  }
  return triangle
};




/**
 * 
 * @param {array} triangle 
 * @description combine arrays of rows into one array
 */
const addRows = (triangle) =>{
  let newRow = [1];
  // last row of the triangle
  // using the last row
  let prev = triangle[triangle.length-1]
  for(let i = 0; i < prev.length-1; i++){
    let current = prev[i];
    let next = prev[i+1];
    newRow.push(current + next)
  }
  newRow.push(1)
  triangle.push(newRow)
  return triangle
}





