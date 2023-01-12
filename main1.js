const form = document.querySelector("form")
const input = document.querySelector("input")
const image = document.querySelector("img")

async function getQR(e) {
    e.preventDefault()
    const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`)
    image.setAttribute("src" , response.url)
}

form.addEventListener("submit", getQR)