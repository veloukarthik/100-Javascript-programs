let user = [
    {name:'karthik',age:31},
    {name:'karthik',age:29},
    {name:'daniel',age:31}
]

//solution 1
let objectDup = user.filter((value,index,array)=>
    array.findIndex((obj)=> (obj.name === value.name)) === index
)

// console.log("object",objectDup);

//solution 2
let objDict = {};
let objectDup2 = user.filter((obj) => {
    if (objDict[obj.name]) {
        return false;
    }
    objDict[obj.name] = true;
    return true;
});

console.log("object2", objectDup2);

//solution 3
let seen = new Set();
let objectDup3 = user.filter((obj) => {
    // let key = obj.name + '_' + obj.age;
    if (seen.has(obj.name)) {
        return false;
    }
    seen.add(obj.name);
    return true;
});

console.log("object3", objectDup3);