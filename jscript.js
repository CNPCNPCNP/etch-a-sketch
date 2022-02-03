const container = document.querySelector('#container')
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
  
  let pixelArray = document.querySelectorAll('.pixel')
  for (let i = 0; i < pixelArray.length; i++) {
    pixelArray[i].addEventListener('mouseover', () => {
      pixelArray[i].style.backgroundColor = 'black'
    })
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
  let pixelArray = document.querySelectorAll('.pixel')
  for (let i = 0; i < pixelArray.length; i++) {
    pixelArray[i].style.width = `${500/pixels}px`
    pixelArray[i].style.height = `${500/pixels}px`
  }
}

function clear() {
  let pixelArray = document.getElementsByClassName('pixel')
  pixelArray = Array.from(pixelArray)
  pixelArray.forEach(pixel => pixel.style.backgroundColor = 'white')
}

function resize() {
  let pixels = parseInt(document.getElementById("pixelInput").value);
  if (Number.isNaN(pixels) || pixels < 10 || pixels > 80) {
    alert('Please enter a number between 10 & 80!')
    document.querySelector("#pixelForm").reset();
  }
  else {
    clear()
    gridDraw(pixels)
    document.querySelector("#pixelForm").reset();
  }
}

const clearButton = document.querySelector('#clear');
const resizeButton = document.querySelector('#resize');
clearButton.addEventListener('click', () => clear())
resizeButton.addEventListener('click', () => resize())

gridDraw()
