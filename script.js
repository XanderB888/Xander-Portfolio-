const flipper = document.getElementById("xxx")

function setColor(name) {
    xxx.style.color = name;
}

function randomColor () {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    xxx.style.color = color;
}