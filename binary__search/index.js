let holder = (sortedArr, findNum) =>{
    let low = 0;
    let high = sortedArr.length - 1;
    
    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        console.log(mid)
        let guess = sortedArr[mid];
        if(guess == findNum){
            return mid;
        }
        if(guess > findNum){
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }
}

let arr = [0,1,2,3,4,5]

holder(arr, 5);