/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(array) {
    let sortedArray = []
    for (let i = 0; i < array.length; i++) {
        sortedArray.push(array[i]**2)
    }
    return sortedArray.sort(function(a,b) {return a-b})
};