
const input = document.createElement("input")
input.id = "number1"
input.type = "number"
input.style.width = "30vw"
input.style.borderRadius = "8px"
input.style.margin = "5px"
input.style.padding = "10px"
input.style.border = "1px solid #ccc"

const input2 = document.createElement("input")
input2.id = "number2"
input2.type = "number"
input2.style.width = "30vw"
input2.style.borderRadius = "8px"
input2.style.margin = "5px"
input2.style.padding = "10px"
input2.style.border = "1px solid #ccc"

const button = document.createElement("button")
button.textContent = "Calculer"
button.id = "calculate"
button.style.backgroundColor = "#2972fc"
button.style.color = "white"
button.style.border = "none"
button.style.padding = "10px"
button.style.fontSize = "20px"
button.style.borderRadius = "12px"

const message = document.createElement("p")
message.id = "result"
message.textContent = "Résultat : "
message.style.fontSize = "20px"

document.body.appendChild(input)
document.body.appendChild(input2)
document.body.appendChild(message)
document.body.appendChild(button)

input.addEventListener("focus", function() {
    input.style.border = "5px solid rgba(41, 139, 252, 0.25)";
    input.style.outline = "none"
})
input.addEventListener("blur", function() {
    input.style.border = "1px solid #ccc" 
})
input2.addEventListener("focus", function() {
    input2.style.border = "5px solid rgba(41, 139, 252, 0.25)";
    input2.style.outline = "none"
})
input2.addEventListener("blur", function() {
    input2.style.border = "1px solid #ccc" 
})

input.addEventListener("keyup", calcul)
input2.addEventListener("keyup", calcul)

button.addEventListener("click", calcul)


function calcul(){
    const num1 = parseFloat(input.value)
    const num2 = parseFloat(input2.value)
    if (isNaN(num1) || isNaN(num2)){
        return 
    }

    const result = num1 + num2
    message.textContent = "Résultat : " + result
}