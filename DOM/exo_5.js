function palindrome(texte) {
    texte = texte.toLowerCase()
    let texteClear = ""
    for (let i = 0; i < texte.length; i++) {
        let char = texte[i];
        if (char >= "a" && char <= "z" || char >= "0" && char <= "9") {
            texteClear += char
        }
    }

    let inverse = "";
    for (let i = texteClear.length - 1; i >= 0; i--) {
        inverse += texteClear[i]
    }
    return texteClear === inverse
}

console.log(palindrome("eye"))
console.log(palindrome("My age is 0, 0 si ega ym."))