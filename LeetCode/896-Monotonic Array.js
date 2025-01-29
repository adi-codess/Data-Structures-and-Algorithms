/**
 * @param {number[]} array
 * @return {boolean}
 */
var isMonotonic = function(array) {
    let inc = true, dec = true;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) dec = false;
        if (array[i] < array[i - 1]) inc = false;
        if (!inc && !dec) return false;
    }
    return true;
};