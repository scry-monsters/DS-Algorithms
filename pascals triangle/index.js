/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    if(numRows === 0) return [];
    if(numRows === 1) return [[1]];
    
    let triangle = [[1]];
    
    for(let i = 1; i < numRows; i++){
        let prevRow = triangle[i - 1];
        const curRow = [];
        curRow.push(1);
        
        for(let j = 1; j < prevRow.length; j++){
            curRow[j] = prevRow[j] + prevRow[j - 1];
        }
        
        curRow.push(1);
        triangle.push(curRow);
    }
    return triangle;
};