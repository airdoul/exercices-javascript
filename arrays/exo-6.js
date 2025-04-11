let fruits = ['apple', 'banana', 'cherry','apple', 'banana', 'cherry','apple', 'banana','apple','apple','apple','apple','apple', 'cherry']

function countOccurences(arr, value) {
    let count = 0
    arr.forEach(element => {
        if(element === value) { 
            count++        
        } 
    }) 
    return count
}

function mostFrequent(arr) {
    let maxOccurence = 0
    let result = ''
    console.log(arr)
    arr.forEach(fruit => {
        const count = countOccurences(arr, fruit)
        if(count > maxOccurence) {
            result = fruit 
            maxOccurence = count
        }
    }) 
    return result
}

console.log(mostFrequent(fruit))