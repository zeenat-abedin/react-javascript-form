import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Flex,
  Button,
  Select,
} from '@chakra-ui/react'

export default function HookForm() {
  return (
    <form>
      <h1>Basic Details</h1>
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
        <FormLabel htmlFor="phone">Phone number</FormLabel>
        <Input id="phone" placeholder="Enter Phone" name="phone" bg="#D9D9D9"/>
        <FormErrorMessage>
            Please enter a valid number.
        </FormErrorMessage>
      </FormControl>       
      </Flex>

      <h1>Other Information</h1>
      <Flex mb={4} gap={4}>
        <FormControl isInvalid={false} flexDir="column">
          <FormLabel htmlFor="gender">Select Gender</FormLabel>
          <Select bg="#D9D9D9">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
        </FormControl>

        <FormControl id="dob" mb="4" isInvalid={false}>
          <FormLabel htmlFor="dob">Date of Birth</FormLabel>
          <Input placeholder="Select date" size="md" type="date" id="date-of-birth" name="dob" bg="#D9D9D9"/>
        </FormControl>
      </Flex>


      <Button type="submit">Submit</Button>
    </form>
  )
}
