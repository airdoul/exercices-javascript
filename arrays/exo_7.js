let sentence = "I love programming";

function reverseWords(sentence) {
let wordArray = sentence.split(" ")
let reversedArray = [] 
    for (let i = wordArray.length - 1; i >= 0; i--) {
reversedArray.push(wordArray[i])
    }
return reversedArray.join(" ")
}

console.log(reverseWords(sentence))