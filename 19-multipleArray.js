// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function sumOfTwo(num)
{
    let numlen = num.length;
    let newnum = [];
    let greater12 = [];
    let lesser12 = [];
    let removeDup = [];
    let count = {};
    for(let i=0;i<=numlen;i++)
    {
        if(count[num[i]])
        {
            count[num[i]]++;
        }
        else
        {
            if(num[i])
            {
                count[num[i]] = 1;
            }
            
        }
        if(!removeDup.includes(num[i]) && num[i])
        {
            removeDup.push(num[i]);
        }
        if(num[i] > 12)
        {
            greater12.push(num[i]);
        }
        if(num[i] < 12)
        {
            lesser12.push(num[i]);
        }
        for(let j=0;j<=i;j++)
        {
            if(num[i]+num[j] == 24)
            {
                newnum.push([num[i],num[j]]);
            }
        }
    }
    return [newnum,{"greater12":greater12},{"lesser12":lesser12},removeDup,{"Dupcount":count}];
}

let num = [9,8,16,18,6,15,15,8];



console.log(sumOfTwo(num));