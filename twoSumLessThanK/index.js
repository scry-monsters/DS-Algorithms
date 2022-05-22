 function twoSumLessThanK(A, K) {
        let lengthOfA = A.length;
        let maxSum = -1;
        for (let i = 0; i < lengthOfA; i++) {
          for (let j = i + 1; j < lengthOfA; j++) {
            let sum = A[i] + A[j];
            if (sum < K && sum > maxSum) {
              maxSum = sum;
            }
          }
        }
        return maxSum;
      }



console.log(twoSumLessThanK([34, 23, 1, 24, 75, 33], 60));