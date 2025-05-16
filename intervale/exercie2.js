let secondesRestantes = 1000000;

const countdownElement = document.getElementById('countdown');

const intervalId = setInterval(function () {
  if (secondesRestantes > 0) {
    countdownElement.textContent = secondesRestantes + 'secondes restantes';
    secondesRestantes--;
  } else {
    countdownElement.textContent = 'Go !';
    clearInterval(intervalId); 
}}, 1000); 
