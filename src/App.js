import { useState } from 'react'
import { Box, ChakraProvider } from '@chakra-ui/react'

import HookForm from './components/HookForm'
import RenderForm from './components/RenderForm'
import theme from './theme'

function App() {
  const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  dob: '',
  gender: '',
  techStack: [{ name: '' }]
})

  function handleFormData(data) {
    setFormData(data)
  }

  return (
    <ChakraProvider theme={theme}>
      <Box p={4} maxW="960px" mx="auto">
        <Box textStyle="h1" textAlign="center" m={4}>
          User Details
        </Box>
      <Box textStyle="h2" maxW="960px" p={4} mx="auto" bg="#F0EEEE">
        <HookForm handleFormData={handleFormData} />
      </Box>
      {formData && (                 
        <Box textStyle="h2" bg="#F0EEEE" p={6} marginTop={5}>
          <RenderForm formData={formData} />
        </Box>
        )}
      </Box>
    </ChakraProvider>
  )
}

export default App
