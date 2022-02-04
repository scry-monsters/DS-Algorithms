let arr = [1,2,3,4,5,6,7,8];
let counter = 0;

let selectionSort = (someArr) => {
    for(let i = 0; i < someArr.length; i++){
        let minimalNum = i;
        for(let j = i + 1; j < someArr.length; j++){
            if(someArr[i] < someArr[minimalNum]){
                minimalNum = j;

            }
            counter += 1
        }
        let holder = someArr[i];
        someArr[i] = someArr[minimalNum];
        someArr[minimalNum] = holder;
    }
    return someArr
}

console.log(selectionSort(arr));
console.log(selectionSort(counter));
