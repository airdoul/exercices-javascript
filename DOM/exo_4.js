const country = [
    "Afghanistan", "Afrique du Sud", "Albanie", "Algérie", "Allemagne", "Andorre", "Angola", "Arabie Saoudite",
    "Argentine", "Arménie", "Australie", "Autriche", "Azerbaïdjan", "Bahamas", "Bahreïn", "Bangladesh", "Belgique",
    "Belize", "Bénin", "Bhoutan", "Biélorussie", "Birmanie", "Bolivie", "Bosnie-Herzégovine", "Botswana", "Brésil",
    "Brunei", "Bulgarie", "Burkina Faso", "Burundi", "Cambodge", "Cameroun", "Canada", "Cap-Vert", "Chili", "Chine",
    "Chypre", "Colombie", "Comores", "Congo (Brazzaville)", "Congo (Kinshasa)", "Corée du Nord", "Corée du Sud",
    "Costa Rica", "Côte d'Ivoire", "Croatie", "Cuba", "Danemark", "Djibouti", "Dominique", "Égypte", "Émirats arabes unis",
    "Équateur", "Érythrée", "Espagne", "Estonie", "Eswatini", "États-Unis", "Éthiopie", "Finlande", "France", "Gabon",
    "Gambie", "Géorgie", "Ghana", "Grèce", "Guatemala", "Guinée", "Guinée équatoriale", "Guinée-Bissau", "Guyana",
    "Haïti", "Honduras", "Hongrie", "Inde", "Indonésie", "Irak", "Iran", "Irlande", "Islande", "Israël", "Italie",
    "Jamaïque", "Japon", "Jordanie", "Kazakhstan", "Kenya", "Kirghizistan", "Kiribati", "Kosovo", "Koweït", "Laos",
    "Lesotho", "Lettonie", "Liban", "Liberia", "Libye", "Liechtenstein", "Lituanie", "Luxembourg", "Macédoine du Nord",
    "Madagascar", "Malaisie", "Malawi", "Maldives", "Mali", "Malte", "Maroc", "Maurice", "Mauritanie", "Mexique",
    "Moldavie", "Monaco", "Mongolie", "Monténégro", "Mozambique", "Namibie", "Népal", "Nicaragua", "Niger", "Nigeria",
    "Norvège", "Nouvelle-Zélande", "Oman", "Ouganda", "Ouzbékistan", "Pakistan", "Palestine", "Panama",
    "Papouasie-Nouvelle-Guinée", "Paraguay", "Pays-Bas", "Pérou", "Philippines", "Pologne", "Portugal", "Qatar",
    "République centrafricaine", "République tchèque", "Roumanie", "Royaume-Uni", "Russie", "Rwanda",
    "Saint-Kitts-et-Nevis", "Saint-Marin", "Saint-Vincent-et-les-Grenadines", "Sainte-Lucie", "Salvador",
    "Samoa", "Sao Tomé-et-Principe", "Sénégal", "Serbie", "Seychelles", "Sierra Leone", "Singapour", "Slovaquie",
    "Slovénie", "Somalie", "Soudan", "Soudan du Sud", "Sri Lanka", "Suède", "Suisse", "Suriname", "Syrie",
    "Tadjikistan", "Tanzanie", "Tchad", "Thaïlande", "Timor oriental", "Togo", "Tonga", "Trinité-et-Tobago",
    "Tunisie", "Turkménistan", "Turquie", "Tuvalu", "Ukraine", "Uruguay", "Vanuatu", "Vatican", "Venezuela", "Vietnam",
    "Yémen", "Zambie", "Zimbabwe"
]
// const listePays = document.getElementById(countryList)
const ul = document.createElement("ul")
ul.id = "contryList"

const input = document.createElement("input")
input.id = "filterInput"
input.placeholder = "Filtrer les pays..."
input.style.width = "80vw"
input.style.borderRadius = "8px"
input.style.margin = "5px"
input.style.padding = "10px"
input.style.border = "1px solid #ccc"

document.body.appendChild(input)
document.body.appendChild(ul)

input.addEventListener("focus", function() {
    input.style.border = "5px solid rgba(41, 139, 252, 0.25)";
    input.style.outline = "none"
})
input.addEventListener("blur", function() {
    input.style.border = "1px solid #ccc" 
})

function listCountryDyn(value) {
    ul.innerHTML = ""
    const paysFiltre = country.filter(pays => pays.toLowerCase().startsWith(value.toLowerCase()))
    paysFiltre.forEach(pays => {
        const li = document.createElement("li")
        li.textContent = pays
        ul.appendChild(li)
    })
}

input.addEventListener("input", (event) => { 
    listCountryDyn(event.target.value) })