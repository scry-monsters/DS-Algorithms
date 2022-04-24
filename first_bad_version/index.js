var twoSum = function(numbers, target) {
    let holder = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = 1; j < numbers.length; j++){
            if(numbers[i] + numbers[j] === target){
            holder.push(i + 1)
            holder.push(j + 1)
            return holder;
        }   
    }
    }
    return "nothing"
};


console.log(twoSum([1,2,3,4,4,9,56,90], 8));