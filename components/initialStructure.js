export const initialStructure = (drawSquare, context, arrDimensions) => {
  // pulsar
  drawSquare(10, 10, context) // top left
  drawSquare(11, 10, context)
  drawSquare(12, 10, context)

  drawSquare(13, 9, context)
  drawSquare(13, 8, context)
  drawSquare(13, 7, context)

  drawSquare(8, 9, context)
  drawSquare(8, 8, context)
  drawSquare(8, 7, context)

  drawSquare(12, 5, context)
  drawSquare(11, 5, context)
  drawSquare(10, 5, context)

  drawSquare(10 + 5, 10, context) // top right
  drawSquare(11 + 5, 10, context)
  drawSquare(12 + 5, 10, context)

  drawSquare(13, 9, context)
  drawSquare(13, 8, context)
  drawSquare(13, 7, context)

  drawSquare(8, 9, context)
  drawSquare(8, 8, context)
  drawSquare(8, 7, context)

  drawSquare(12, 5, context)
  drawSquare(11, 5, context)
  drawSquare(10, 5, context)

  // generate initial array

  let frame = []

  for (let i = 0; i < arrDimensions[1]; i++) {
    frame.push([])
    for (let j = 0; j < arrDimensions[0]; j++) {
      frame[i].push(0)
    }
  }

  return frame
}
