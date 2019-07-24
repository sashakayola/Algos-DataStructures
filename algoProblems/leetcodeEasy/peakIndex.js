// https://leetcode.com/problems/peak-index-in-a-mountain-array/

var peakIndexInMountainArray = function(A) {
    let peak = 0;
    let peakIndex = 0;
    
    for (let i = 0; i < A.length; i++) {
        let current = A[i];
        if (current > peak) {
            peak = current;
            peakIndex = i;
        }
        if (current < peak) {
            return peakIndex;
        }
    }
};
