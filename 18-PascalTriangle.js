let n = 5;
for (let line = 1; line <= n; line++) {
    let row = "";
    let value = 1;
    for (let i = 1; i <= line; i++) {
        row += value + " ";
        value = (value * (line - i)) / i;
    }
    console.log(row);
}
