function merge(leftArr, rightArr){
    let arr = [];
    let leftIndex = 0;
    let rightIndex =  0;

    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
        const leftEl = leftArr[leftIndex];
        const rightEl = rightArr[rightIndex];
        if(leftEl < rightEl){
            arr.push(leftEl)
            leftIndex++;
        }
        else{
            arr.push(rightEl);
            rightIndex++;
        }

    }
    return [...arr, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
  }
  
  function mergeSort(arr) {
      if(arr.length <= 1){
          return arr;
      }
      let middleIndex = Math.floor(arr.length / 2);
      let leftArr = arr.slice(0, middleIndex);
      let rightArr = arr.slice(middleIndex);

      return merge(
          mergeSort(leftArr),
          mergeSort(rightArr)
      )

  }
  
  
  
  console.log(mergeSort([1,4,2,8,5,6,7,3,2]))


