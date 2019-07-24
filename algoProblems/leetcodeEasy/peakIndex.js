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

// BETTER WAY: mountain keeps increasing until it doesn't. the point where it decreases, the point before is the peak

var peakIndexInMountainArray = function(A) {
    for (let i = 1; i < A.length; i++) {
        if (A[i] < A[i-1]) {
            return i - 1;
        }
    }
};
