import { Box, ChakraProvider } from '@chakra-ui/react'

import HookForm from './components/HookForm'
import RenderForm from './components/RenderForm'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textStyle='h1' textAlign='center' m={4}>
        User Details
      </Box>
      <Box textStyle="h2" maxW="960px" p={4} mx="auto" bg="#F0EEEE">
      <HookForm/>
      </Box>
      <Box>
        <RenderForm/>
      </Box>
    </ChakraProvider>
  )
}

export default App
