var svg = document.getElementById('violentpatterns')
var flex = 250
var sizes = []
var textareaActive = false

var letters = {
  a: function (size) {
    return 'M9,108.2h' + ((flex * size + 36 * (size - 1)) - 17.9 ) + 'V216h9V72v-9v-0.2h0C' + (flex * size + 36 * (size - 1)) + ',28.1,' + ((flex * size + 36 * (size - 1)) - 28.2) + ',0,' + ((flex * size + 36 * (size - 1)) - 62.9) + ',0h-9H72h-8.8H63C28.2,0,0,28.2,0,63v9v144h9V108.2z M9,72v-9 C9,33.2,33.2,9,63,9h9h' + ((flex * size + 36 * (size - 1)) - 143.9) + 'h9c29.8,0,54,24.2,54,54v9v27.2H9V72z'
  },
  e: function (size) {
    return 'M9.1,215.9H' + (flex * size + 36 * (size - 1)) + 'v-9H9.1L9,108.2h' + ((flex * size + 36 * (size - 1)) - 117 ) + 'v-9H9V72v-9C9,33.2,33.2,9,63,9h9h' + ((flex * size + 36 * (size - 1)) - 72 ) + 'V0H72h-9C28.3,0,0.1,28.1,0,62.8h0V63v9l0.1,144	L9.1,215.9z'
  },
  i: function (size) {
    return ((flex * size + 36 * (size - 1)) / 1.99 - 9) + ',216 ' + (flex * size + 36 * (size - 1)) + ',216 ' + (flex * size + 36 * (size - 1)) + ',207 ' + ((flex * size + 36 * (size - 1)) / 1.99 - 9) + ',207 ' + ((flex * size + 36 * (size - 1)) / 1.99 - 9) + ',9 ' + (flex * size + 36 * (size - 1)) + ',9 ' + (flex * size + 36 * (size - 1)) + ',0 ' + ((flex * size + 36 * (size - 1)) / 1.99 - 9) + ',0 ' + ((flex * size + 36 * (size - 1)) / 1.99) + ',0 0,0 0,9 ' + ((flex * size + 36 * (size - 1)) / 1.99) + ',9 ' + ((flex * size + 36 * (size - 1)) / 1.99) + ',207 0,207 0,216 ' + ((flex * size + 36 * (size - 1)) / 1.99) + ',216'
  },
  l: function (size) {
    return 'M63.3,215.9h9h' + ((flex * size + 36 * (size - 1)) - 72 ) + 'v-9h-' + ((flex * size + 36 * (size - 1)) - 72 ) + 'h-9c-29.8,0-54-24.2-54-54v-9v-144h-9v144v9v0h0C0.3,187.7,28.5,215.9,63.3,215.9z'
  },
  n: function (size) {
    return 'M' + (flex * size + 36 * (size - 1)) + '-0.2h-9V0H72h-9C28.2,0,0,28.2,0,63v9v144h9V72v-9C9,33.2,33.2,9,63,9h9h' + ((flex * size + 36 * (size - 1)) - 81 ) + 'v207h9V9h0V0h0V-0.2z'
  },
  o: function (size) {
    return 'M0,153c0,34.8,28.2,63,63,63h9v-0.2h' + ((flex * size + 36 * (size - 1)) - 179.8 ) + 'v0h44.9c34.8,0,63-28.2,63-63v-9h0V72h0v-9c0-34.8-28.2-63-63-63h-9 H72h-9C28.2,0,0,28.2,0,63v9h0v72h0V153z M9,72L9,72l0-9C9,33.2,33.2,9,63,9h9h' + ((flex * size + 36 * (size - 1)) - 143.9 ) + 'h9c29.8,0,54,24.2,54,54v9h0v72h0v8.8 c0,29.8-24.2,54-54,54h-26.9v0H63v0.2c-29.8,0-54-24.2-54-54v-9h0V72z'
  },
  p: function (size) {
    return 'M9.1,107.2h' + ((flex * size + 36 * (size - 1)) - 63 ) + 'c29.8,0,53.9-24.2,53.9-54c0-29.8-24.2-54-53.9-54H9.1H0v9V216h9L9.1,107.2z M9.1,8.2h' + ((flex * size + 36 * (size - 1)) - 63 ) + ' c24.8,0,44.9,20.1,44.9,45s-20.1,45-44.9,45H9.1V8.2z'
  },
  r: function (size) {
    return 'M' + ((flex * size + 36 * (size - 1)) - 54.1 ) + ',0H9H0v9v207h9V9h' + ((flex * size + 36 * (size - 1)) - 63.1 ) + 'c24.9,0,45,20.1,45,45s-20.1,45-45,45h-' + ((flex * size + 36 * (size - 1)) - 189 ) + 'h-4.5c-32.3,0-58.5,26.2-58.5,58.5 c0,30.8,23.8,56,54,58.3v0.2h' + ((flex * size + 36 * (size - 1)) - 126.1 ) + 'v-9H134.9h-4.5c-27.3,0-49.5-22.2-49.5-49.5s22.2-49.5,49.5-49.5h4.5h' + ((flex * size + 36 * (size - 1)) - 189 ) + 'l0,0l0,0 c29.8,0,54-24.2,54-54S' + ((flex * size + 36 * (size - 1)) - 24.3 ) + ',0,' + ((flex * size + 36 * (size - 1)) - 54.1 ) + ',0z'
  },
  s: function (size) {
    return 'M' + ((flex * size + 36 * (size - 1)) - 58.5 ) + ',216c32.3,0,58.5-26.2,58.5-58.5S' + ((flex * size + 36 * (size - 1)) - 26.2 ) + ',99,' + ((flex * size + 36 * (size - 1)) - 58.5 ) + ',99v0l-4.5,0H54C29.1,99,9,78.9,9,54S29.1,9,54,9h' + ((flex * size + 36 * (size - 1)) - 54 ) + 'V0H54v0 C24.2,0,0,24.2,0,54c0,29.8,24.2,54,54,54h' + ((flex * size + 36 * (size - 1)) - 117 ) + 'h4.5c27.3,0,49.5,22.2,49.5,49.5S' + ((flex * size + 36 * (size - 1)) - 31.2 ) + ',207,' + ((flex * size + 36 * (size - 1)) - 58.5 ) + ',207H' + ((flex * size + 36 * (size - 1)) - 63 ) + 'H0v9h' + ((flex * size + 36 * (size - 1)) - 63 ) + 'H697.5' + ((flex * size + 36 * (size - 1)) - 58.1 ) + 'z'
  },
  t: function (size) {
    return 'M0.1,0L0.1,0L0,144v9c0,34.8,28.2,63,63,63v0h' + ((flex * size + 36 * (size - 1)) - 125.9 ) + 'v0h0c34.7,0,62.9-28.1,63-62.8h-9V153c0,29.8-24.2,54-54,54h-9v0H72v0h-9	c-29.8,0-54-24.2-54-54v-9V9h' + ((flex * size + 36 * (size - 1)) - 9 ) + 'V0H9H0.1z'
  },
  v: function (size) {
    return 'M0,0v216h9h' + ((flex * size + 36 * (size - 1)) - 107.9 ) + 'h27h8.8h0.2c34.8,0,63-28.2,63-63v-0.2V144V0h-9v144v9c0,0.1,0,0.1,0,0.2h0	c-0.1,29.7-24.2,53.8-54,53.8h0h-9H9V0H0z'
  }
}

function draw(regenerate = false) {
  if (textareaActive) return

  // Reset
  var count = 0
  var fill = 0
  var line = 0
  svg.innerHTML = ''

  for (character of 'violentpatterns') {
    // Set size and position
    if (sizes[count] && !regenerate) {
      var size = sizes[count]
    } else {
      var size = Math.floor(Math.random() * 4) + 1
      size = fill + size > 8 ? 8 - fill : size

      if (count === 14) {
        size = 8 - fill
      }

      sizes[count] = size
    }

      var translate = {
        x: fill * flex + 36 * fill,
        y: line * 252
      }

      if (fill + size === 8) {
        fill = 0
        linefill = 0
        line ++
      } else {
        fill += size
      }

    // 'I' is a polygon instead of a path
    if (character === 'i') {
      var letter = document.createElementNS('http://www.w3.org/2000/svg',"polygon")
      letter.setAttributeNS(null, 'points', letters['i'](size))
    } else {
      var letter = document.createElementNS('http://www.w3.org/2000/svg',"path")
      letter.setAttributeNS(null, 'd', letters[character](size))
    }

    letter.setAttributeNS(null, 'transform', 'translate(' + translate.x + ' ' + translate.y + ')')
    letter.setAttributeNS(null, 'transform', 'translate(' + translate.x + ' ' + translate.y + ')')
    svg.appendChild(letter)

    count += 1
  }
}

let frameCount = 1
let redrawInterval

redraw = () => {
  draw(true)

  if (frameCount % 20 === 0) {
    console.log(frameCount)
    clearInterval(redrawInterval)
    setTimeout(() => {
      redrawInterval = setInterval(redraw, 50)
    }, 1500)
  }

  frameCount += 1
}

redrawInterval = setInterval(redraw, 50)


/*
 * Programme toggles
 */
const paragraphs = document.querySelectorAll('.programme-line')
paragraphs.forEach(line => {
  line.onclick = () => {
    line.querySelector('.arrow').classList.toggle('active')
    document.getElementById(`programme-${line.dataset.target}`).classList.toggle('active')
  }
})