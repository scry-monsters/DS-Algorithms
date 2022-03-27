let array = [1, 4, 67, 7, 3, 2, 54, 6, 8, 9, 3, 6];

function quickSort(arr) {
    if(arr.length <= 1){
      return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];
  
    let less = [];
    let bigger = [];
  
    for(let i = 0; i < arr.length; i++){
      if(i === pivotIndex){
        continue;
      }
      if(arr[i] < pivot){
        less.push(arr[i])
      }
      else{
        bigger.push(arr[i])
      }
    }
    return [...quickSort(less), pivot, ...quickSort(bigger)];
  }

console.log(quickSort(array));
