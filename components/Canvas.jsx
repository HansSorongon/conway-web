import { useRef, useEffect } from 'react'
import { Box } from '@chakra-ui/react'

import { initialStructure } from './initialStructure.js'
import { gameLoop } from './gameLoop.js'

const Canvas = () => {
  const canvasRef = useRef(null)

  //globals
  const squareHeight = 30
  const squareWidth = 40

  let tick = 0
  let i = 0
  let init = false
  let frame = [{'x': 10, 'y': 10}, {'x': 11, 'y': 11}, {'x': 12, 'y': 12}]

  const render = (arrWidth, arrHeight, initFrame) => { // -------------------------------------- animation loop

    const canvas = canvasRef.current
    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2
    canvas.style.width = window.innerWidth
    canvas.style.height = window.innerHeight
    const context = canvas.getContext('2d')
    // end of canvas context

    const drawSquare = (x, y) => {
      context.fillStyle = '#7f7f7f'
      context.fillRect(x * squareWidth, y * squareHeight, squareWidth, squareHeight)
    }

    // grid
    const drawGrid = (width, height) => {


      for (let i = 1; i <= Math.floor(width / 40); i++) {
        context.beginPath();
        context.moveTo(i * squareWidth, 0);
        context.lineTo(i * squareWidth, height);
        context.strokeStyle = 'white';
        context.lineWidth = 1;
        context.stroke();

        context.beginPath();
        context.moveTo(0, i * squareHeight);
        context.lineTo(width, i * squareHeight);
        context.strokeStyle = 'white';
        context.lineWidth = 1;
        context.stroke();
        }
    }

    drawGrid(canvas.width, canvas.height)

    // all blocks go here
    // if (frame) {
    //   gameLoop(drawSquare, context, frame)
    // }

    // initialize

    // frame change
    if (tick % 60 == 0) {
      // have the arrays change here
      i++
    }

    for (let cell of frame) {
      drawSquare(cell['x'] + i, cell['y'])
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
    <Box bg='black' h='calc(150vh)' w='100%' position='absolute' display='flex' justifyContent='center'>
      <canvas fillStyle="white" ref={canvasRef} style={{width: '100%'}}/>
    </Box>
  )

}

export default Canvas
