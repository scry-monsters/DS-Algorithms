let arr = [1,6,3,4,9,5];

let bubbleSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length - i; j++){ //removing the need to check the already sorted numbers on new iterations optimizes the code(even though it's still O(n^2))
            if(arr[j] < arr[j - 1]){
                let numHolder = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = numHolder;
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr))


