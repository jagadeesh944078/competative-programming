/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let transformedArray = [];
    // arr.forEach((item,index) => {
    //     transformedArray[index] = fn(item, index);
    // });
    //   return arr.reduce((transformedArray, element, index) => {
    //       transformedArray[index] = fn(element, index);
    //       return transformedArray;
    //   },[])
        return arr.map((element, index)=>
            fn(element,index)
        )
    // for(let i=0; i<arr.length;i++){
    //     transformedArray[i] = fn(arr[i], i);
    // }
    // return transformedArray;
};
