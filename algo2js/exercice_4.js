function smallestCommons(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  
  let result = min;

  for (let i = min + 1; i <= max; i++) {
    result = (result * i) / multiple(result, i);
  }

  return result;
}

function multiple(a, b) {
  return b === 0 ? a : multiple(b, a % b);
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1])); 
console.log(smallestCommons([2, 10])); 
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18])); 