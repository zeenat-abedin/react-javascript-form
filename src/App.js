import { Box, ChakraProvider } from '@chakra-ui/react'

import HookForm from './components/HookForm'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign='center' textStyle='h1'>
        User Details
      </Box>
      <Box maxW="960px" p={4} mx="auto" bg="#F0EEEE">
      <HookForm/>
      </Box>
      
    </ChakraProvider>
  )
}

export default App
