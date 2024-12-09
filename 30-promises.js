

function log()
{
    new Promise((resolve, reject) =>{
        if(resolve)
        {
            setTimeout(()=>{
                resolve("Logged");
            }, 0);
        }
        if(reject)
        {
            reject("Failed to log");
        }
    })
}

log().then((res)=>{
    console.log("Logged");
}).catch((err)=>{
    console.log(err);
})