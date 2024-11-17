
function OddOrEven()
{
    let evens = [];
    let odds = [];
    let nums;
    for(let i=0;i<100;i++)
    {
        if(i % 2 == 0)
        {
            evens.push(i);
        }
        else
        {
            odds.push(i);
        }
    }
    nums = [evens,odds];
    console.log("odd or event",nums);
}

OddOrEven();