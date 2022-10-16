/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let i = 0; i< nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
               return [i, j];
            }
        }
    }
  };

  // better solution 
  
  var twoSum = function(nums, target) {
    let m = new Map();
    for (let [ind, n] of nums.entries()){
        if (m.has(target - n)) return [ind, m.get(target - n)]
        m.set(n, ind)
    }
  };
  
 console.log(twoSum([5,2], 7))