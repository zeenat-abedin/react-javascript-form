import { ChakraProvider } from '@chakra-ui/react'

import HookForm from './components/HookForm'

function App() {
  return (
    <ChakraProvider>
      <HookForm/>
    </ChakraProvider>
  )
}

export default App
