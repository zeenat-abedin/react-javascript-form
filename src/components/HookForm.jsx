import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Flex,
  Button,
} from '@chakra-ui/react'

export default function HookForm() {
  return (
    <form>
      <Flex mb={4} gap={4}>
        <FormControl isInvalid={false} isRequired w="50%">
          <FormLabel htmlFor='firstname'>
            First name
          </FormLabel>
          <Input id='firstname' placeholder='Enter First name' bg="#D9D9D9" />
          <FormErrorMessage>
            Error message
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={false} isRequired w="50%">
          <FormLabel htmlFor='lastname' >
            Last name
          </FormLabel>
          <Input id='lastname' placeholder='Enter Last name' bg="#D9D9D9" />
        </FormControl>
      </Flex>
      <Flex mb={4} gap={4}>
      <FormControl isInvalid={false} isRequired>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" placeholder="Enter Email" name="email" bg="#D9D9D9"/>
          <FormErrorMessage>
            Please enter a valid email address.
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={false} isRequired>
        <FormLabel htmlFor="phone"> Phone number</FormLabel>
        <Input id="phone" placeholder="Enter Phone" name="phone" bg="#D9D9D9"/>
        <FormErrorMessage>
            Please enter a valid number.
        </FormErrorMessage>
      </FormControl>
        
      </Flex>
      <Button type="submit">Submit</Button>
    </form>
  )
}
