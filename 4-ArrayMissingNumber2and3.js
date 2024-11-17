function ArrayMissing(nums, rangeStart, rangeEnd) {
    // Calculate the total sum of the full range
    let totalCount = rangeEnd - rangeStart + 1; // Total numbers in the range
    let total = (totalCount * (rangeStart + rangeEnd)) / 2;

    // Calculate the sum of the given numbers
    let sum = nums.reduce((arr, curr) => arr + curr, 0);

    // Find the missing number
    let missing = total - sum;

    console.log("Missing number:", missing);
}

// Example: Two-digit numbers (10–99)
let numsTwoDigit = [10, 11, 12, 13, 15, 16, 17, 18, 19];
ArrayMissing(numsTwoDigit, 10, 19); // Output: Missing number: 14

// Example: Three-digit numbers (100–109)
let numsThreeDigit = [100, 101, 102, 103, 105, 106, 107, 108, 109];
ArrayMissing(numsThreeDigit, 100, 109); // Output: Missing number: 104

