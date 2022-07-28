function sumPrimes(number) {
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
          return false;
      }
      return true;
    }
    let result = 0;
    for(let i = 2; i <= number; i++){
      if(isPrime(i)){
        result += i;
      }
    }
    return result;
  }
  
  console.log(sumPrimes(10));