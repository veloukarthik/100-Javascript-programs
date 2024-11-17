let text = "Welcome, hello Ann! how are you? I am Karthik"

//solution 1
function solution1()
{
    let vowels = ["a","e","i","o","u","A","E","I","O","U"];
    let strlen = text.length;
    let text2 = "";
    for(let i=0; i< strlen;i++)
    {
        if(!vowels.includes(text[i]))
        {
            text2 += text[i];
        }
    }
    console.log("solution1",text2);
}
solution1(text);

// solution 2
function solution2(text)
{
    let text3 = text.replace(/[aeiou]/gi,"");
    console.log("solution2",text3);
}
solution2(text);
