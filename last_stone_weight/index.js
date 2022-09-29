/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
    if(stones.length <= 1) return stones;
    stones.sort((a, b) => a - b);
    let a = stones.pop();
    let b = stones.pop()
    stones.push(Math.floor(a - b));
    return lastStoneWeight(stones);
};