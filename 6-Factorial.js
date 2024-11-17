

function factorial(nums)
{
    if(nums == 1) return 1;

    nums = nums * factorial(nums-1);
    return nums;
}

console.log(factorial(4));