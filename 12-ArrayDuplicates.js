let nums = [1, 2, 3, 2, 4, 5, 5];
//solution 1 returns duplicates only
function findDuplicates(arr) {
    const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
    console.log(duplicates);
    return [...new Set(duplicates)];
}
console.log(findDuplicates(nums)); // [2, 5]

//solution 2 for remove duplicates
function removeDuplicates(arr) {
    const duplicates = arr.filter((item, index) => arr.indexOf(item) == index);
    return duplicates;
}
console.log(removeDuplicates(nums));


  