/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    let newMat = mat.flat();
    if(newMat.length !== r * c){
        return mat;
    }
    let result = [];
    for(let i = 0; i < r; i++){
        result.push(newMat.splice(0,c))
    }
    return result;
};