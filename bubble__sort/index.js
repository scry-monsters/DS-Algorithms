let arr = [1,6,3,4,9,5];

let holder = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length - 1; j++){
            if(arr[j] < arr[j - 1]){
                let numHolder = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = numHolder;
            }
        }
    }
    return arr
}

console.log(holder(arr))