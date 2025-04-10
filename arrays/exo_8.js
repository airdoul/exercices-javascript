const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filtrerEven(arr) {
    let filtre = arr.filter(x => x % 2 === 0)
    return filtre
}

console.log(filtrerEven(arr))