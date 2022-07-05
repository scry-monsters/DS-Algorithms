function searchInsert(nums, target) {
   let arr = [...nums];
   for(let i = 0; i < arr.length; i++){
       if(arr[i] === target){
           return i;
       }
       if(arr[i] > target){
           return i;
       }
   }
   return nums.length;
};

console.log(searchInsert([1,3,5,6], 2));