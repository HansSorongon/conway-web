import { useRef, useEffect } from 'react'
import { Box } from '@chakra-ui/react'

const Canvas = () => {
  const canvasRef = useRef(null)

  //globals
  const squareHeight = 30
  const squareWidth = 40

  let tick = 0
  let frame = [
    { x: 18, y: 16 },
    { x: 17, y: 15 },
    { x: 16, y: 16 },
    { x: 22, y: 16 },
    { x: 22, y: 17 },
    { x: 24, y: 16 },
  ]

  let newFrame = []
  let i = 1

  const render = (arrWidth, arrHeight, initFrame) => {
    // -------------------------------------- animation loop

    const canvas = canvasRef.current
    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2
    canvas.style.width = window.innerWidth
    canvas.style.height = window.innerHeight
    const context = canvas.getContext('2d')
    // end of canvas context

    const drawSquare = (x, y) => {
      context.fillStyle = '#7f7f7f'
      context.fillRect(
        x * squareWidth,
        y * squareHeight,
        squareWidth,
        squareHeight
      )
    }

    // grid
    const drawGrid = (width, height) => {
      for (let i = 1; i <= Math.floor(width / 40); i++) {
        context.beginPath()
        context.moveTo(i * squareWidth, 0)
        context.lineTo(i * squareWidth, height)
        context.strokeStyle = 'white'
        context.lineWidth = 1
        context.stroke()

        context.beginPath()
        context.moveTo(0, i * squareHeight)
        context.lineTo(width, i * squareHeight)
        context.strokeStyle = 'white'
        context.lineWidth = 1
        context.stroke()
      }
    }

    drawGrid(canvas.width, canvas.height)

    // all blocks go here
    // if (frame) {
    //   gameLoop(drawSquare, context, frame)
    // }

    // initialize

    // frame change
    if (i % 200 == 0) {
      for (let cell of frame) {
        // switch to use i based for loop for performance
        let liveNeighbors = 0
        for (let posNeigh of frame) {
          // count number of neighbors
          // checks if adjacent neighbor is alive
          if (cell['x'] + 1 == posNeigh['x'] && cell['y'] == posNeigh['y']) {
            // if on the right
            liveNeighbors++
          } else {
            // need to clear something, some cells getting added for no reason.

            let neighbors = 0
            for (let posAdj of frame) {
              if (cell['x'] == posAdj['x'] && cell['y'] - 1 == posAdj['y']) {
                // tl
                neighbors++
              }
              if (
                cell['x'] + 1 == posAdj['x'] &&
                cell['y'] - 1 == posAdj['y']
              ) {
                // t
                neighbors++
              }
              if (
                cell['x'] + 2 == posAdj['x'] &&
                cell['y'] - 1 == posAdj['y']
              ) {
                // tr
                neighbors++
              }
              if (cell['x'] + 2 == posAdj['x'] && cell['y'] == posAdj['y']) {
                // r
                neighbors++
              }
              if (cell['x'] == posAdj['x'] && cell['y'] + 1 == posAdj['y']) {
                // bl
                neighbors++
              }
              if (
                cell['x'] + 1 == posAdj['x'] &&
                cell['y'] + 1 == posAdj['y']
              ) {
                // b
                neighbors++
              }
              if (
                cell['x'] + 2 == posAdj['x'] &&
                cell['y'] + 1 == posAdj['y']
              ) {
                // br
                neighbors++
              }
              if (neighbors === 2) {
                newFrame.push({ x: cell['x'] + 1, y: cell['y'] })
              }
            }
          }

          if (cell['x'] - 1 == posNeigh['x'] && cell['y'] == posNeigh['y']) {
            // if on the left
            liveNeighbors++
          }
          if (cell['x'] == posNeigh['x'] && cell['y'] + 1 == posNeigh['y']) {
            // if on the bottom
            liveNeighbors++
          }
          if (cell['x'] == posNeigh['x'] && cell['y'] - 1 == posNeigh['y']) {
            // if on the top
            liveNeighbors++
          }
          if (
            cell['x'] - 1 == posNeigh['x'] &&
            cell['y'] - 1 == posNeigh['y']
          ) {
            // if on the top left
            liveNeighbors++
          }
          if (
            cell['x'] + 1 == posNeigh['x'] &&
            cell['y'] - 1 == posNeigh['y']
          ) {
            // if on the top right
            liveNeighbors++
          }
          if (
            cell['x'] - 1 == posNeigh['x'] &&
            cell['y'] + 1 == posNeigh['y']
          ) {
            // if on the bottom left
            liveNeighbors++
          }
          if (
            cell['x'] + 1 == posNeigh['x'] &&
            cell['y'] + 1 == posNeigh['y']
          ) {
            // if on the bottom right
            liveNeighbors++
          }
        }

        const isFound = newFrame.some((element) => {
          if (element.x == cell['x'] && element.y == cell['y']) {
            return true
          }
          return false
        })

        // check if cell should stay alive UNCOMMENT THIS
        if (liveNeighbors === 2 || liveNeighbors === 3) {
          if (!isFound) {
            newFrame.push(cell)
          }
        }

        // this algo doesn't have frame garbage collection yet so fix this shit
        // later
      } // end for

      frame = newFrame
    } // end if
    i++

    newFrame = [] // THIS IS CRUCIAL //

    for (let cell of frame) {
      drawSquare(cell['x'], cell['y'])
    }

    tick++

    requestAnimationFrame(render)
  }

  useEffect(() => {
    if (!canvasRef.current) return

    let arrWidth = Math.floor(canvasRef.current.width / squareWidth) // initializing to 5 and 7 for some reason
    let arrHeight = Math.floor(canvasRef.current.height / squareHeight)

    // form initial 2d-array here
    //

    requestAnimationFrame(render, arrWidth, arrHeight)
  }, [])

  return (
    <Box
      bg="black"
      h="calc(150vh)"
      w="100%"
      position="absolute"
      display="flex"
      justifyContent="center"
    >
      <canvas fillStyle="white" ref={canvasRef} style={{ width: '100%' }} />
    </Box>
  )
}

export default Canvas
