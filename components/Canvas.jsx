import { useRef, useEffect } from 'react'
import { Box } from '@chakra-ui/react'

import { initialStructure } from './initialStructure.js'

const Canvas = () => {
  const canvasRef = useRef(null)

  const squareHeight = 30
  const squareWidth = 40

  const drawGrid = (width, height, context) => {
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

  const drawSquare = (x, y, context) => {
    context.fillStyle = '#7f7f7f'
    context.fillRect(x * squareWidth, y * squareHeight, squareWidth, squareHeight)
  }

  let tick = 0
  let i = 0
  let init = false
  const render = (initialPosition) => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2
    canvas.style.width = window.innerWidth
    canvas.style.height = window.innerHeight
    const context = canvas.getContext('2d')

    if (tick % 60 == 0) {
      i++
    }

    drawGrid(canvas.width, canvas.height, context)

    // initial position
    // if (init == false) {
      initialStructure(drawSquare, context)
      init = true
    // }

    // all blocks go here



    tick++

    requestAnimationFrame(render)
  }

  useEffect(() => {
    if (!canvasRef.current) return
    let initialPosition = 'test'
    requestAnimationFrame(render, initialPosition)
  }, [])

  return (
    <Box bg='black' h='calc(150vh)' w='100%' position='absolute' display='flex' justifyContent='center'>
      <canvas fillStyle="white" ref={canvasRef} style={{width: '100%'}}/>
    </Box>
  )

}

export default Canvas
