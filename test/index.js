let array = [1, 3, 9, 4, 2];

function sortingFunc(arr) {
	for(let i = 0; i < arr.length; i++){
        let holderMin = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[holderMin]){
                console.log("THIS IS THE NEW SMALLEST NUMBER");
                holderMin = j;
            }
        }
        let hold = arr[holderMin];
        arr[holderMin] = arr[i];
        arr[i] = hold;
    }
    return arr;
}

console.log(sortingFunc(array));
