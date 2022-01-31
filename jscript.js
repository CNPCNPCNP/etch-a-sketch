let pixels = 16
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

function gridDraw(pixels) {
    let rows = rowCreator(pixels)
    rows.forEach(row => {
        pixelCreator(pixels, row)
        grid.appendChild(row)
    });
    let pixelArray = document.getElementsByClassName('pixel')
    pixelArray = Array.from(pixelArray)
    pixelArray.forEach(pixel => {
        console.log(pixel)
        pixel.style.width = `${500/pixels}px`
        pixel.style.height = `${500/pixels}px`
    });
}

gridDraw(pixels)