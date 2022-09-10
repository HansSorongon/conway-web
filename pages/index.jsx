import { useState, useEffect } from 'react'
import Head from 'next/head'
import {
  Box,
  Flex,
  Text,
  Heading,
  Container,
} from '@chakra-ui/react'
import { displayStructures } from './structures.js'

import Title from '../components/Title'

var started = 0

const updatePositions = (count, frame) => {

  displayStructures(count, frame)

  // frame becomes a copy, updatedFrame will be returned
  // for (let i = 1; 0 < frame.length; i++) {
  //   if (frame[i]) {
  //     for (let j = 0; j < frame[i].length; j++) {
  //       let neighbors = 0

  //       if (i < frame.length - 2 && j < frame[i].length - 2) {
  //         if (frame[i - 1][j - 1] == 1) { // top left
  //           neighbors++
  //         }
  //         if (frame[i - 1][j] == 1) { // top
  //           neighbors++
  //         }
  //         if (frame[i - 1][j + 1] == 1) { // top right
  //           neighbors++
  //           console.log('neighbor detected')
  //         }

  //         if (frame[i][j - 1] == 1) { // left
  //           neighbors++
  //         }
  //         if (frame[i][j + 1] == 1) { // right
  //           neighbors++
  //         }

  //         if (frame[i + 1][j - 1] == 1) { // bottom left
  //           neighbors++
  //         }
  //         if (frame[i + 1][j] == 1)  { // bottom
  //           neighbors++
  //         }
  //         if (frame[i + 1][j + 1] == 1) { // bottom right
  //           neighbors++
  //         }

          // // life rules

          // if (frame == 1) { // alive
          //   if (neighbors < 2) { // underpopulation
          //     updatedFrame[i][j] = 0
          //   }
          //   if (neighbors == 2 || neighbors == 3) { // lives on
          //     updatedFrame[i][j] = 1
          //   }
          //   if (neighbors > 3) { // overpopulation
          //     updatedFrame[i][j] = 0
          //   }
          // }
          // if (frame[i][j] == 0) { // dead
          //   if (neighbors == 3) {
          //     updatedFrame[i][j] = 1
          //    }
          // }
        // }
        // }
      // }
    // }
  return frame
}

const getFrame = (count) => {

    const arrHeight = Math.ceil((screen.height / 15) * 1.5)
    const arrLength = Math.ceil(screen.width / 15)

    let frame = []

    // create a 2d array depending on screen size
    for (let i = 0; i < arrHeight; i++) {
      let line = []
      for (let j = 0; j < arrLength; j++) {
        line.push(0) // 0 is dead 1 is alive
      }
      frame.push(line)
    }

    frame = updatePositions(count, frame)

    // create react elements && check for white squares
    let lines = []
    for (let row of frame) {
      let line = row.map(chr => <span key={Math.random().toString()}
      style={chr == 1 ? {color: '#7f7f7f', padding: '0px'} : {color: 'black'}}>■</span>)
      line.push(<br key={Math.random().toString()}/>)
      lines.push(line)
    }

    return <Box lineHeight='14px'>{lines}</Box>

}

const Home = () => {
  const [count, setCount] = useState(0)
  const [background, setBackground] = useState([])

  // animation loop
  //
  // dt to be implemented
  //
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
    <Box bg='black' h='calc(270vh)' w='100%' position='absolute' display='flex' justifyContent='center'>
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
