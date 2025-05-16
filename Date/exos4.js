function joursRestants(dateCibleStr) {
  const aujourdHui = new Date();
  const dateCible = new Date(dateCibleStr);

  const diffTemps = dateCible.getTime() - aujourdHui.getTime(); 
  const diffJours = Math.ceil(diffTemps / (1000 * 60 * 60 * 24)); 

  return diffJours;
}

console.log(joursRestants("2025-12-25")); 