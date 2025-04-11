const imageSources = [
    "https://cdn.pixabay.com/photo/2021/10/31/16/10/hot-air-balloons-6757939_640.jpg",
    "https://cdn.pixabay.com/photo/2024/12/28/03/39/vietnam-9295186_640.jpg",
    "https://cdn.pixabay.com/photo/2025/02/03/21/01/forest-9380292_640.jpg",
    "https://cdn.pixabay.com/photo/2023/05/30/10/56/ai-generated-8028293_640.png"
]

document.body.style.textAlign = "center"


const mainImageContainer = document.createElement("div")
const mainImage = document.createElement("img")
mainImage.id = "mainImage"
mainImage.style.width = "60vw"
mainImage.style.height = "60vh"
mainImage.style.marginBottom = "10px"
mainImageContainer.appendChild(mainImage)
mainImage.src = ''


const imageContainer = document.createElement('div')
imageContainer.style.display = "flex"
imageContainer.style.justifyContent = "center"
imageContainer.style.flexWrap = "wrap"

document.body.appendChild(mainImageContainer)
document.body.appendChild(imageContainer)


imageSources.forEach(source => {
    const img = document.createElement('img')
    img.src = source;
    img.classList.add('thumbnail')
    img.style.width = '20vw'
    img.style.height = '20vh'
    img.style.margin = '10px'
    img.style.borderRadius = "10px"
    img.style.cursor = 'pointer'
    img.addEventListener('click', function() {
        mainImage.src = source 
    })

    imageContainer.appendChild(img)
})

