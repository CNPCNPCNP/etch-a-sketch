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
    console.log('here!')
    pixelArray = Array.from(pixelArray)
    pixelArray.forEach(pixel => pixel.style.backgroundColor = 'white')
}

const btn = document.querySelector('#clear');
let size = document.querySelector('#pixelInput').value
btn.addEventListener('click', () => clear())
resize.addEventListener



gridDraw(pixels)