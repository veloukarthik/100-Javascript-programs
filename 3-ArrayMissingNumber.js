function ArrayMissing(nums) {
    let numslen = nums.length + 1; // Length of full sequence (including the missing number)

    // Calculate the total sum of the full sequence
    let total = (numslen * (numslen + 1)) / 2;

    // Calculate the sum of the given array
    let sum = nums.reduce((arr, curr) => arr + curr, 0);

    // The missing number is the difference between the total and the sum
    let missing = total - sum;

    console.log("Missing number:", missing);
}

let nums = [11, 12, 13, 15, 14, 16];
ArrayMissing(nums);
