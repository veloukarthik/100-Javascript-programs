let text = "hello123hello234"

let num1 = text.match(/\d/g);

console.log("num1",eval(num1.join("+")));

let num2 = text.match(/\d+/g);

console.log("num2",eval(num2.join("+")))

let rand = Math.random(Math.floor())*100;
let num3 = text.replace(/[a-z]/g,rand.toFixed(0))

num3 = num3.match(/\d/g)
console.log("num3",eval(num3.join("+")));