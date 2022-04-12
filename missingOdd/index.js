function missingNum(arr){
    let holder = 1;
    for(let i = 0; i < arr.length; i++){
        holder += 2;
        if(arr.includes(holder)){
            continue;
        }
        else{
            return holder
        }
    }
}

console.log(missingNum([1,3,5,9,11]));