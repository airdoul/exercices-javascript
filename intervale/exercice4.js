setInterval(function() {
  const currentDate = new Date();
  document.getElementById('clock').textContent = currentDate.toLocaleTimeString();
}, 1000);