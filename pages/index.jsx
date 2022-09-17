import Head from 'next/head'
import { Box, Flex, Text, Heading, Container, Image } from '@chakra-ui/react'

import Canvas from '../components/Canvas'
import TextBox from '../components/TextBox'

const Home = () => {
  return (
    <Box>
      <Head>
        <title>Conway&apos;s Game of Life</title>
      </Head>
      <Flex position="absolute" justifyContent="center" w="100%">
        <Flex color="white" w="50%" alignItems="center" direction="column">
          <Flex
            border="3px solid white"
            direction="column"
            alignItems="center"
            rounded={15}
            p={10}
            bg="black"
            mt={5}
          >
            <Box w="80%">
              <Image src="title.svg" />
            </Box>
            <Container p="0px" bg="black">
              <Heading
                as="h5"
                fontSize="25px"
                fontFamily="fira mono"
                mt="16px"
                p="15px"
                pt="18px"
                rounded={15}
              >
                What is Conway&apos;s Game of Life?
              </Heading>
              <TextBox>
                Conway&apos;s Game of Life also known as Life, is a simulation
                following a set number of rules to mirror cellular life. It was
                invented by British mathematician John Conway in 1970. The games
                original state determines the outcome and does not require any
                further intervention. Many different patterns occur within the
                game and are classified according to how they behave. Some
                examples of patterns include: still-lifes, oscillators, and
                spaceships.
              </TextBox>
            </Container>
          </Flex>
        </Flex>
      </Flex>
      <Canvas alignSelf="center" display="flex" justifyContent="center" />
    </Box>
  )
}

export default Home
