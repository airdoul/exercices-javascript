function formatCustomDate(dateStr) {
    const date = new Date(dateStr)
    const formattedDate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
    };
    return date.toLocaleDateString("fr-FR", formattedDate);
}

console.log(formatCustomDate("2025-05-24"));