const input = document.createElement("input")
input.id = "userInput"
input.placeholder = "Tapez quelque chose..."
input.style.width = "50vw"
input.style.borderRadius = "5px"
input.style.margin = "5px"
input.style.padding = "10px"
input.style.border = "1px solid #ccc"

const button = document.createElement("button")
button.textContent = "valider"
button.style.backgroundColor = "#2972fc"
button.style.color = "white"
button.style.border = "none"
button.style.padding = "10px"
button.style.fontSize = "20px"
button.style.borderRadius = "12px"
button.style.border = "none"

const message = document.createElement("p")
message.id = "message"
message.textContent = "Je ne comprends pas"
message.style.color = "red"
message.style.fontSize = "20px"


document.body.appendChild(input)
document.body.appendChild(message)
document.body.appendChild(button)

input.addEventListener("focus", function() {
    input.style.border = "5px solid rgba(41, 139, 252, 0.25)";
    input.style.outline = "none"
})
input.addEventListener("blur", function() {
    input.style.border = "1px solid #ccc" 
})

button.addEventListener("click", function() {
const userInput = input.value.toLowerCase()
    if (userInput == "bonjour") {
         message.textContent = "Bonne journée !"
         message.style.color = "green"
     } else if (userInput == "au revoir") {
         message.textContent = "À la prochaine !"
         message.style.color = "green"
     } else {
         message.textContent = "Je ne comprends pas"
         message.style.color = "red"
         message.style.fontWeight = 'bold'
     }
 })

