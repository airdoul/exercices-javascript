 const input = document.createElement("input")
 input.id = "userInput"
 input.placeholder = "Tapez quelque chose..."
 const button = document.createElement("button")
 button.textContent = "valider"
 const message = document.createElement("p")
 message.id = "message"


 document.body.appendChild(input)
 document.body.appendChild(button)
 document.body.appendChild(message)



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

