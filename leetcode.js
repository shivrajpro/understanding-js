// 1. https://leetcode.com/problems/contains-duplicate/
var containsDuplicate = function (nums) {
    let tracker = {};

    for (const n of nums) {
        if (!tracker[n])
            tracker[n] = 1;
        else
            tracker[n]++;
    }

    // console.log(tracker);

    return Object.values(tracker).some((n) => n > 1)
};

let arr = [1, 2, 3, 1]
// console.log(containsDuplicate(arr));;



// 2. https://leetcode.com/problems/contains-duplicate-ii/
var containsNearbyDuplicate = function (nums, k) {

    for (let i = 0; i < nums.length; i++) {
        if ((i != i + k) && (i + k) < nums.length && nums[i] === nums[i + k])
            return true;
        else if (k >= nums.length) {
            //since k can be any greater than length of array. run a while loop decr. k
            let tempK = k;
            while (tempK-- >= 0) {
                if ((i != i + tempK) &&
                    i != tempK &&
                    (i + tempK) < nums.length &&
                    nums[i] === nums[i + tempK] &&
                    Math.abs(i - tempK) <= k)

                    return true;
            }
        }
    }

    return false;
};

console.log('>>', containsNearbyDuplicate([1, 2, 3, 1], 3));//true
console.log('>>', containsNearbyDuplicate([1, 0, 1, 1], 1));//true
console.log('>>', containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));//false
console.log('>>', containsNearbyDuplicate([99, 99], 2));//true
console.log('>>', containsNearbyDuplicate([1, 2], 2));//false
console.log('>>', containsNearbyDuplicate([1, 2, 1], 0));//false