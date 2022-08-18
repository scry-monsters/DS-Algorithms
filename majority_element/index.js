var majorityElement = function(nums) {
    let breadWinner = 0;
    let currValue = 0;
    let maxValue = 0;
   let map = new Map();
    for(let i of nums){
       if(map.has(i)){
        map.set(i, map.get(i) + 1);
       }
       else{
        map.set(i, 1);
       }
    }
    console.log(map)
    for(let j of map.keys()){
        if(map.get(j) > currValue){
            currValue = map.get(j);
            maxValue = Math.max(maxValue, currValue);
            breadWinner = j;
        }
    }
    return breadWinner;
};


console.log(majorityElement([2,2,1,1,1,2,2]));