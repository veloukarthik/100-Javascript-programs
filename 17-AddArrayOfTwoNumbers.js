var addTwoNumbers = function(l1, l2) {
    l1 = l1.reverse().join('');
    l2 = l2.reverse().join('');
    console.log("l1",l1)
    console.log("l2",l2)
    sum = Number(l1)+Number(l2);
    return sum.toString().split("").reverse();
};

let l1 = [2,4,3,7], l2 = [5,6,4];

console.log(addTwoNumbers(l1,l2));