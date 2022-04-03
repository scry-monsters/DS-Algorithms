function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++){
      let currMinIndex = i;
      for(let j = i + 1; j < arr.length; j++){
        if(arr[j] < arr[currMinIndex]){
         currMinIndex = j;
        }
      }
      let holder = arr[currMinIndex];
      arr[currMinIndex] = arr[i];
      arr[i] = holder;
    }
    return arr;
  }
  
  
  console.log(selectionSort([4,5,3,12,5,56]))
