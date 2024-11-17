function ArrayOfTwo(nums, total) {
    let numlen = nums.length;
    let nums2 = [];
    for (let i = 0; i < numlen; i++) {
        for (let j = i + 1; j < numlen; j++) {
            let sum = nums[i] + nums[j];
            if (sum === total) {
                nums2.push([nums[i], nums[j]]);
            }
        }
    }
    console.log("nums", nums2);
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ArrayOfTwo(nums, 12);
