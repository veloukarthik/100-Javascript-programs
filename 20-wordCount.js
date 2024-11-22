function wordCount(text)
{
    let words = text.toLowerCase().split(" ");
   const wordCount = {};

    // Iterate through each word and count occurrences
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });
    return wordCount;
}

console.log(wordCount("I love my country India and India is my country"));