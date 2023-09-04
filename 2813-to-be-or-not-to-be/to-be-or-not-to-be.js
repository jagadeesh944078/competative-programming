/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const throwError = (errStr) => { throw new Error(errStr)}; 
    return {
        toBe: (val2) => val === val2 || throwError("Not Equal"),
        notToBe: (val2) => val !== val2  || throwError("Equal")
    }
};

expect(5).toBe(5);
// expect(5).notToBe(5);
