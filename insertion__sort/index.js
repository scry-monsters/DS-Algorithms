const array = [1, 5, 67, 4, 3, 7, 8, 9];

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
        for(let j = i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                let holder = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = holder;
            }
        }
    }
    return arr;
}

console.log(insertionSort(array));
