

function fibonocci(n)
{
    let fib = [0, 1];
    for(let i=2; i<=n; i++)
    {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[n];
}

console.log(fibonocci(10));



function recursive_fibonocci(n)
{
    if(n<=1) return 1;
    
    return fibonocci(n-1)+fibonocci(n-2);
    
    
}

console.log(recursive_fibonocci(40));