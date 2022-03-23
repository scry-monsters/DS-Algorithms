function binarySearch(arr, value) {
    let min = 0;
    let max = arr.length - 1;
    while(min <= max){
    console.log("ye")
    const mid = min + Math.floor((max - min) / 2);
    let guess = arr[mid];
    if(guess === value){
      return mid;
    }
    if(value < guess){
      max = mid - 1
    }
    else {
      min = mid + 1
    }
    }
    return "Value Not Found"
  }

let testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

binarySearch(testArr, 8);