function isValidDate(datestring) {
    const [year, month, day] = datestring.split("-").map(Number)
    const date = new Date(year, month - 1, day)

    return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  )};

console.log(isValidDate("2024-02-29")); 
console.log(isValidDate("2023-02-29")); 
console.log(isValidDate("2025-04-31")); 
