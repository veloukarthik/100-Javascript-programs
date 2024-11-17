let user = [
    {name:'karthik',age:31},
    {name:'karthik',age:29},
    {name:'daniel',age:31}
]

let objectDup = user.filter((value,index,array)=>
    array.findIndex((obj)=> (obj.name === value.name)) === index
)

console.log("object",objectDup);