/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let map = new Map([
        [')', '('],
        [']', '['],
        ['}', '{'],
      ])
    let stack = [];
    for(let i of s){
        if(!map.has(i)){
            stack.push(i);
        }
       else{
        let stackPop = stack.pop();
        if(stackPop !== map.get(i)) return false;
       }
    }
    console.log(stack.length)
    return stack.length === 0 ? true : false; 
};


console.log(isValid("()[]"));
