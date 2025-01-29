/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (array) {
  // Brute Force Method
  // let sortedArray = []
  // for (let i = 0; i < array.length; i++) {
  //     sortedArray.push(array[i]**2)
  // }
  // return sortedArray.sort(function(a,b) {return a-b})

  // Pointers Method - More Efficient
  let array_ = new Array(array.length).fill(0);
  let pointerLeft = 0;
  let pointerRight = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    let leftSquared = Math.pow(array[pointerLeft], 2);
    let rightSquared = Math.pow(array[pointerRight], 2);
    if (leftSquared > rightSquared) {
      array_[i] = leftSquared;
      pointerLeft++;
    } else {
      array_[i] = rightSquared;
      pointerRight--;
    }
  }
  return array_;
};
