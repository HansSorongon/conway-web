import Head from 'next/head'
import { Box, Flex, Text, Heading, Container } from '@chakra-ui/react'

import Canvas from '../components/Canvas'
import Title from '../components/Title'

const Home = () => {
  return (
    <Box>
      <Head>
        <title>Conway&apos;s Game of Life</title>
      </Head>
      <Canvas />
      <Flex position="absolute" justifyContent="center" w="100%">
        <Flex color="white" w="50%" alignItems="center" direction="column">
          <Title mt={12} />

          <Container p="0px">
            <Heading
              as="h5"
              fontSize="25px"
              fontFamily="fira mono"
              mt="16px"
              border="3px solid white"
              p="15px"
              pt="18px"
              borderRadius="5px"
            >
              What is Conway&apos;s Game of Life?
            </Heading>
            <Text
              fontFamily="fira mono"
              fontSize="16px"
              style={{ textIndent: 28, textAlign: 'justify' }}
              mt="20px"
            >
              The Game of Life, also known simply as Life, is a cellular
              automaton devised by the British mathematician John Horton Conway
              in 1970. It is a zero-player game, meaning that its evolution is
              determined by its initial state, requiring no further input. One
              interacts with the Game of Life by creating an initial
              configuration and observing how it evolves. It is Turing complete
              and can simulate a universal constructor or any other Turing
              machine.
            </Text>
          </Container>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Home
