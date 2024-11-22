let num=5;

for(let m=1;m<num;m++)
{
    let row = "";
    let value = " ".repeat(num-m)+1;
    for(let n=1;n<=m;n++)
    {
        row += value+" ";
        value = ((value * (m-n))/n);
    }
    console.log(row);
}


let n=5;
for(let i=1;i<n;i++)
{
    let row = "";
    let value = " ".repeat(n-i)+1;
    for(let j=1;j<=i;j++)
    {
        row += value + " ";
        value = (value * (i-j))/j;
    }
    console.log(row);
}