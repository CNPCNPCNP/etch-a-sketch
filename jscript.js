const grid = document.querySelector('#grid')

function rowCreator(pixels) {
    let div
    let rows = []
    for (let i = 0; i < pixels; i++) {
        div = document.createElement('div')
        div.classList.add('row')
        rows.push(div)
    }
    return rows
}

function pixelCreator(columns, row) {
    let div
    for (let i = 0; i < columns; i++) {
        div = document.createElement('div')
        div.classList.add('pixel')
        row.appendChild(div)
    }
}

function gridDraw(pixels = 16) {
    //Delete all rows from old grid to clear it
    let rowArray = document.getElementsByClassName('row')
    rowArray = Array.from(rowArray)
    rowArray.forEach(row => {
        grid.removeChild(row)
    })
    
    //Create rows and fill each row with divs before adding to the page
    let rows = rowCreator(pixels)
    rows.forEach(row => {
        pixelCreator(pixels, row)
        grid.appendChild(row)
    });

    //Add properties to pixels so that they display
    let pixelArray = document.getElementsByClassName('pixel')
    pixelArray = Array.from(pixelArray)
    pixelArray.forEach(pixel => {
        pixel.style.width = `${500/pixels}px`
        pixel.style.height = `${500/pixels}px`
    
    pixelArray.forEach(pixel => {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = 'black'
        })
    })
    });
}

function clear() {
    let pixelArray = document.getElementsByClassName('pixel')
    pixelArray = Array.from(pixelArray)
    pixelArray.forEach(pixel => pixel.style.backgroundColor = 'white')
}

function resize() {
    let pixels = parseInt(document.getElementById("pixelInput").value);
    if (Number.isNaN(pixels) || pixels < 10 || pixels > 100) {
        alert('Please enter a number between 10 & 100!')
    }
    else {
        console.log('redrawing boss')
        clear()
        gridDraw(pixels)
    }
}

const clearButton = document.querySelector('#clear');
const resizeButton = document.querySelector('#resize');
clearButton.addEventListener('click', () => clear())
resizeButton.addEventListener('click', () => resize())

gridDraw()