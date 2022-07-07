var twoSum = function (numbers, target) {
	if (numbers.length < 2) return;
	let start = 0;
	for (let i = 1; i < numbers.length; i++) {
        for(let j = 1; j < numbers.length; j++){
            if (numbers[start] + numbers[j] === target) {
                return [start + 1, j + 1];
            } else {
                start++;
            }
        }
        }
};

console.log(twoSum([2, 3, 4], 6));
