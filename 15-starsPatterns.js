
//solution 1 basic stars
function starsPattern(num) {

    for (let i = 1; i <= num; i++) {
        let data = "";
        for (let j = 1; j <= i; j++) {
            data += "*";
        }
        console.log(" ".repeat(num-i)+data);
    }

}

starsPattern(5);

//solution 2 pyramid
function inverseStars(num) {
    // First Half: Increasing pattern
    for (let i = 1; i <= num; i++) {
        let spaces = " ".repeat(num - i); // Spaces for centering
        let stars = "*".repeat(i * 2 - 1); // Odd number of stars for center alignment
        console.log(spaces + stars);
    }

    // Second Half: Decreasing pattern
    for (let i = num - 1; i >= 1; i--) {
        let spaces = " ".repeat(num - i); // Spaces for centering
        let stars = "*".repeat(i * 2 - 1); // Odd number of stars for center alignment
        console.log(spaces + stars);
    }

}

inverseStars(5);