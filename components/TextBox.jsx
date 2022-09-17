import { Text } from '@chakra-ui/react'

const TextBox = ({ children }) => {
  return (
    <Text
      fontFamily="fira mono"
      fontSize="16px"
      style={{ textIndent: 28, textAlign: 'justify' }}
      rounded={15}
      padding={5}
    >
      {children}
    </Text>
  )
}

export default TextBox
