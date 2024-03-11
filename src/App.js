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
      <Box textStyle="h1" textAlign="center" m={4}>
        User Details
      </Box>
      <Box textStyle="h2" maxW="960px" p={4} mx="auto" bg="#F0EEEE">
        <HookForm   handleFormData={handleFormData} />
      </Box>
      {formData && (<Box>
        <RenderForm textStyle="h2" formData={formData}/>
      </Box>)}
    </ChakraProvider>
  )
}

export default App
