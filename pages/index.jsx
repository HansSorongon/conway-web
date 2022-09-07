import { useState, useEffect } from 'react'
import Head from 'next/head'
import {
  Box,
  Flex,
  Text,
  Heading,
  Container,
} from '@chakra-ui/react'

import Title from '../components/Title'


const Home = (tick) => {
  const [count, setCount] = useState(0)
  const [loopCount, setLoopCount] = useState(0)
  const [background, setBackground] = useState([])

  const getFrame = (count) => {

    const arrHeight = Math.ceil(screen.height / 15)
    const arrLength = Math.ceil(screen.width / 15)

    let frameTest = [
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ]

    let frame = []

    for (let i = 0; i < arrHeight; i++) {
      let line = []
      for (let j = 0; j < arrLength; j++) {
        line.push(0)
      }
      frame.push(line)
    }

    if (count < arrHeight - 10) {
      console.log(`count ${count}`)
      console.log(`frame ${arrHeight}`)
      frame[5 + 1 * count][2] = 1
      frame[5 + 1 * count][4] = 1
      frame[4 + 1 * count][3] = 1
      frame[3 + 1 * count][4] = 1
      frame[3 + 1 * count][2] = 1

      frame[5 + 1 * count][2 + 5] = 1
      frame[5 + 1 * count][4 + 5] = 1
      frame[4 + 1 * count][3 + 5] = 1
      frame[3 + 1 * count][4 + 5] = 1
      frame[3 + 1 * count][2 + 5] = 1
    }

    let lines = []

    for (let row of frame) {
      let line = row.map(chr => <span key={Math.random().toString()} style={chr == 1 ? {color: 'white', padding: '0px'} : {color: 'black'}}>▉</span>)
      line.push(<br key={Math.random().toString()}/>)
      lines.push(line)
    }

    return <Box lineHeight='14px'>{lines}</Box>
  }

  // animation loop
  useEffect(() => {

    const id = setInterval(() => {
      let newCount = count++
      setCount(newCount)
      setBackground(getFrame(newCount))
    }, 1000)
    return () => {
      clearInterval(id)
    }
  },[])

  return (
    <Box>
    <Box bg='black' h='calc(180vh)' w='100%' position='absolute' display='flex' justifyContent='center'>
        <Box color='#bebebe' fontSize='15px'>
          { background }
        </Box>
      </Box>
      <Flex position='absolute' justifyContent='center' w='100%'>
          <Flex color='white' w='50%' alignItems='center' direction='column'>
            <Title mt={12} />

            <Container p='0px'>
            <Heading
              as='h5'
              fontSize='25px'
              fontFamily='fira mono'
              mt='16px'
              border='3px solid white'
              p='15px'
              pt='18px'
              borderRadius='5px'
            >
              What is Conway&apos;s Game of Life?
            </Heading>
            <Text fontFamily='fira mono' fontSize='16px' style={{ textIndent: 28, textAlign: 'justify' }} mt='20px'>
            The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.

            </Text>
            </Container>

          </Flex>
      </Flex>
    </Box>
  )
}

export default Home
