function sortArr(leftArr, rightArr){
    let arr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
      let leftNum = leftArr[leftIndex];
      let rightNum = rightArr[rightIndex];
      if(leftNum < rightNum){
        arr.push(leftNum);
        leftIndex++;
      }
      else{
        arr.push(rightNum);
        rightIndex++;
      }
    }
    return [...arr, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
    }
    
    function mergeSort(arr) {
      if(arr.length <= 1){
        return arr;
      }
      let middleIndex = Math.floor(arr.length / 2);
      let leftArr = arr.slice(0, middleIndex);
      let rightArr = arr.slice(middleIndex);
    
      // Only change code below this line
    
      return sortArr(
        mergeSort(leftArr),
        mergeSort(rightArr)
      );
      // Only change code above this line
    }
  
  
  console.log(mergeSort([1,4,2,8,5,6,7,3,2]))


