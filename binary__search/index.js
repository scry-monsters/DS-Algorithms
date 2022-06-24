function binarySearch(arr, value) {
  let counter = 0;
   let smallest =  0;
   let biggest  = arr.length - 1;
   while(smallest < biggest && value < arr[biggest]){
     counter++;
     let middleIndex = Math.floor((smallest + biggest) / 2);
     let guess = arr[middleIndex];
     if(guess === value){
       return counter;
     }
     if(guess < value){
       smallest = middleIndex + 1;
     }
     else{
       biggest = middleIndex - 1;
     }
   }
   return counter;
  }

let testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

console.log(binarySearch(testArr, 15));






