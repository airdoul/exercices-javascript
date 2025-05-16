function addOneWeek(dateStr) {
    const date = new Date(dateStr)
    date.setDate(date.getDate() + 7)

  
    const annee = date.getFullYear()
    const mois = String(date.getMonth() + 1)
    const jour = String(date.getDate())

    return `${annee}-${mois}-${jour}`
}

console.log(addOneWeek("2024-10-1"))
