// function binarySearch(arr, value) {
//   let counter = 0;
//    let smallest =  0;
//    let biggest  = arr.length - 1;
//    while(smallest < biggest && value < arr[biggest]){
//      counter++;
//      let middleIndex = Math.floor((smallest + biggest) / 2);
//      let guess = arr[middleIndex];
//      if(guess === value){
//        return counter;
//      }
//      if(guess < value){
//        smallest = middleIndex + 1;
//      }
//      else{
//        biggest = middleIndex - 1;
//      }
//    }
//    return counter;
//   }

let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// console.log(binarySearch(testArr, 15));
console.log(testArr.length)





function binarySearch(arr, num){
  let smallest = 0;
  let biggest = arr.length - 1;
  let iterations = 0;
  while(biggest > smallest && num < arr[biggest]){
    iterations++;
    let middleIndex = Math.floor((smallest + biggest) / 2);
    if(arr[middleIndex] === num){
      return iterations;
    }
    if(num > arr[middleIndex]){
      smallest = middleIndex + 1;
    }
    else{
      biggest = middleIndex - 1;
    }
  }
  return iterations;
}

console.log(binarySearch(testArr, 10));