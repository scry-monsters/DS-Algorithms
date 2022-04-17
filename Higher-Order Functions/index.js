//The basic way to the higher order functions if needed, although, I would use the built in ones just to make it easier ;)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//forEach Method
Array.prototype.myForEachMethod = function(callback){
    for(let i = 0; i < this.length; i++){ //We take in a callback function and call on each element of the array we are iterating through
        callback((this[i])) //In this case and the next ones the callback function is going to be the one passed below where the myForEachMethod is being called
    }
}
arr.myForEachMethod(elem => console.log(elem)) // 'elem => console.log(elem)' is our callback function


//filter Method
Array.prototype.myFilterMethod = function(callbackFunc){
    let newArr = []; 
    for(let i = 0; i < this.length; i++){ // 'this' keyword refers to the array we are currently working with
        if(callbackFunc(this[i])){ //we invoke the callback function on the elements of the array and if true push into the new array
            newArr.push(arr[i])
        }
    }
    return newArr;
}
let filterResult = arr.myFilterMethod(elem => elem > 5);
console.log(filterResult)


//map Method
Array.prototype.myMapMethod = function(callback){
    let newArr = [];
    for(let i = 0; i < this.length; i++){
        newArr.push(callback(this[i])); //The same as the filter method, I just pushed in the new elements that went through the callback function
    }
    return newArr;
}
let mapResult = arr.myMapMethod(elem => Math.pow(elem, 2));
console.log(mapResult)


//reduce Method
Array.prototype.myReduceMethod = function (callback){
    let accumulator = 0; //accumulator will contain the sum of all the elements from the given array
    for(let i = 0; i < this.length; i++){
        callback(accumulator += this[i])
    }
    return accumulator;
}
let reduceResult = arr.myReduceMethod((acc, curr) => acc + curr);
console.log(reduceResult)