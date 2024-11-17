

function palindrome(n)
{
    let pal = [];
    for(let i=0;i<=n;i++)
    {
        let strNum = i.toString();
        let revmnum = strNum.split("").reverse().join("");

        if(i == revmnum)
        {
            pal.push(i);
        }
    }
    console.log("palindrome",pal);
}

palindrome(1000);