// Color changer project start
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
//Color changer project end

//Quote generator start
const quotes = ["I played ice hockey for South Africas Senior Mens National team, and I was also the assistant captain", 
    "I grew up hunting with my dad and brother",
     "I always want to spoil the ones I love", 
     "I previously lived in Boston for a year", 
     "I previously lived in Bradford, Canada for a year", 
     "I love all forms of nature and wildlife", 
     "I try to always maintain a good level of fitness", 
     "I love my little french bulldog 'Loki'"]

    const usedIndexes = new Set()
    const quoteElement = document.getElementById("quote")

    function generateQuote() {
        if (usedIndexes.size >= quotes.length) {
            usedIndexes.clear()
        }

        while (true) {
            const randomIdx = Math.floor(Math.random() * quotes.length)

            if (usedIndexes.has(randomIdx)) continue

            const quote = quotes[randomIdx]
            quoteElement.innerHTML = quote;
            usedIndexes.add(randomIdx)
            break 
        }
        
    }
//Quote generator end

//About me paragraph hide and show - start

var div = document.getElementById('aboutP');
var display = 0;

function hideShow () {
    if (display == 0)
    {
        div.style.display = 'block';
        display = 1;
    } else
    {
        div.style.display = 'none'
        display = 0;
    }
}

//About me paragraph hide and show - end