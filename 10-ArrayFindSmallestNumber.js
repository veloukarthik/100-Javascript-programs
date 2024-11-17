let nums = [2.5, 3.4, 5.6, 5.7, 2.7];

//solution 1
function smallestNumber(nums) {
    let min1 = Infinity;
    for (let i of nums) {
        min1 = Math.min(min1, i);
    }
    console.log("min1", min1);
}
smallestNumber(nums);

//solution 2
function reduceMethod(nums) {
    let min2 = nums.reduce((acc, curr) => Math.min(acc, curr), Infinity);
    console.log("min2", min2);
}
reduceMethod(nums);



//solution 3
let min3 = Math.min(...nums);
console.log("min3", min3);

