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

// console.log('>>', containsNearbyDuplicate([1, 2, 3, 1], 3));//true
// console.log('>>', containsNearbyDuplicate([1, 0, 1, 1], 1));//true
// console.log('>>', containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));//false
// console.log('>>', containsNearbyDuplicate([99, 99], 2));//true
// console.log('>>', containsNearbyDuplicate([1, 2], 2));//false
// console.log('>>', containsNearbyDuplicate([1, 2, 1], 0));//false

// 3. https://leetcode.com/problems/single-number/
const singleNumber =  function (nums) {
    const tracker = {};

    for (let i = 0; i < nums.length; i++) {
        const e = nums[i];
        if(!tracker[e])
            tracker[e] = 1;
        else
            tracker[e] += 1;
    }

    // console.log('>> tracker',tracker);
    for (const k in tracker) {
        if(tracker[k] === 1)
            return k;
    }
}

// console.log(singleNumber([2,2,1]));
// console.log(singleNumber([4,1,2,1,2]));
// console.log(singleNumber([1]));

// 4. https://leetcode.com/problems/determine-if-two-events-have-conflict
const haveConflict = function (event1, event2) {
    // Input: event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]
    // Output: true

    // console.log("events",event1, event2);
    //first store the hour in an arr1 and then compare


    const [startA, endA] = event1;
    const [startB, endB] = event2;

    if (startA <= startB) {
      if (endA >= startB) return true;
    } else {
      if (endB >= startA) return true;
    }

    return false;

}

console.log(haveConflict(["01:15","02:00"], ["02:00","03:00"]));
console.log(haveConflict(["01:00","02:00"], ["01:20","03:00"]));
console.log(haveConflict(["10:00","11:00"], ["14:00","15:00"]));
console.log(haveConflict(["01:37","14:20"], ["05:06","06:17"]));