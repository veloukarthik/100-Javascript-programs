

function factorial(n)
{
    let fact = 1;
    for(let i=1; i<=n; i++)
    {
        fact = fact * i;
    }
    return fact;
}

console.log(factorial(10));


function recursive_factorial(n){
    if(n<=1) return 1;
    
    return n * recursive_factorial(n-1);
}

console.log(recursive_factorial(10));