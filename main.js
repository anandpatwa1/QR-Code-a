const form = document.querySelector("form")
const input = document.querySelector("input")
const qrImage = document.querySelector("#qrImg")
const size = document.querySelector("#size")



form.addEventListener("submit" , makeQr)

async function makeQr(e){
    e.preventDefault()
    const response =await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size.value}&data=${input.value}`)
    qrImage.setAttribute("src" , response.url)
    console.log(size.value);
}