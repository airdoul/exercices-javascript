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

console.log(countOccurences(fruits, "apple"))