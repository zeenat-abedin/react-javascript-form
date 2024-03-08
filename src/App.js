import { ChakraProvider } from '@chakra-ui/react'

import HookForm from './components/HookForm'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HookForm/>
    </ChakraProvider>
  )
}

export default App
