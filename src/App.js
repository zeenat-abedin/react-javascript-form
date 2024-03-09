import { Box, ChakraProvider } from '@chakra-ui/react'

import HookForm from './components/HookForm'
import RenderForm from './components/RenderForm'
import theme from './theme'
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState(null)

  function handleFormData(data) {
    setFormData(data)
  }

  return (
    <ChakraProvider theme={theme}>
      <Box textStyle='h1' textAlign='center' m={4}>
        User Details
      </Box>
      <Box textStyle="h2" maxW="960px" p={4} mx="auto" bg="#F0EEEE">
        <HookForm   handleFormData={handleFormData} />
      </Box>
      <Box>
        <RenderForm formData={formData}/>
      </Box>
    </ChakraProvider>
  )
}

export default App
