function sumFibs(num) {
    let curr = 1;
    let prev = 0;
    let result = 0;
    while(curr <= num){
     if(curr % 2 !== 0){
       result += curr;
     }
     curr += prev;
     prev = curr - prev;
    }
    return result;
  }
  
  console.log(sumFibs(4));
