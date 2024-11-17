let nums = [100,50,20,80,101,105];
//soultion 1
function findLargestNum(nums)
{   
    let max = -Infinity;
    nums.map((value,index)=>{
        max = Math.max(max,value);
    })
    
    console.log("max1",max);
}

findLargestNum(nums);

//single line solutions 2
console.log("max2",Math.max(...nums));


//solution 3
let max3 = -Infinity;
for(let i of nums)
{
    if(i>max3)
    {
        max3 = i;
    }
}
console.log('max3',max3);

//solution 4
function reduceMethod(nums)
{
    let max4 = nums.reduce((acc, curr) => Math.max(acc, curr), -Infinity);
    console.log("max4", max4);
}

reduceMethod(nums);

