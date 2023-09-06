/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let transformedArray = [];
    for(let i=0; i<arr.length;i++){
        transformedArray[i] = fn(arr[i], i);
    }
     return transformedArray;
};
