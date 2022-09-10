import { useRef, useEffect } from 'react'
import { Box } from '@chakra-ui/react'

const Canvas = () => {
  const canvasRef = useRef(null)

  let i = 0
  const render = () => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    context.fillStyle = '#ffffff'
    context.fillRect(0 + i, 0 , 50, 50)

    i += 0.1

    requestAnimationFrame(render)
  }

  useEffect(() => {
    requestAnimationFrame(render)
  }, [])

  return (
    <Box bg='black' h='calc(150vh)' w='100%' position='absolute' display='flex' justifyContent='center'>
      <canvas fillStyle="white" ref={canvasRef}/>
    </Box>
  )

}

export default Canvas
