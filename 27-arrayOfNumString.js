var text = "hello133 hellow122 world 235"

var numbers = text.match(/\d+/g);

console.log("num",eval(numbers.join("+")));


let numeric = [1,2,3,4,5,"tested"];
console.log(eval(numeric.join("").match(/\d/g).join("+")));