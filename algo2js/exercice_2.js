function spinalCase(sentence) {
    let newsentence = sentence.replace(/([a-z])([A-Z])/g, ('$1 $2'));
    newsentence = newsentence.replace(/ /g, '-');
    newsentence = newsentence.replace(/_/g, '-');
    return newsentence.toLowerCase()
}
console.log(spinalCase("This Is Spinal Tap"))
console.log(spinalCase("thisIsSpinalTap"))
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log(spinalCase("Teletubbies say Eh-oh"))
console.log(spinalCase("AllThe-small Things"))

