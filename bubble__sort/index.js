let testArr = [9, 1, 6, 3, 4, 9, 5, 0];

let bubbleSort = (arr) => {
	let newArr = [...arr];
	for (let i = 0; i < newArr.length; i++) {
		for (let j = 0; j < newArr.length; j++) {
			if (newArr[j] > newArr[j + 1]) {
				let holder = newArr[j + 1];
				newArr[j + 1] = newArr[j];
				newArr[j] = holder;
			}
		}
	}
	return newArr;
};

console.log(bubbleSort(testArr));
