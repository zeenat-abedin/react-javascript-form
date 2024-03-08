import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
} from '@chakra-ui/react'

export default function HookForm() {
  return (
    <form>
      <Flex mb={4}>
        <FormControl isInvalid={false} isRequired w="50%">
          <FormLabel htmlFor='firstname'>
            First name
          </FormLabel>
        </FormControl>
        <FormControl isInvalid={false} isRequired w="50%">
          <FormLabel htmlFor='lastname'>
            Last name
          </FormLabel>
        </FormControl>
      </Flex>
      <Flex>
      <FormControl isInvalid={false}>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" name="email" />
        <FormErrorMessage></FormErrorMessage>
        <FormHelperText>We&apos;ll never share your email with anyone else.</FormHelperText>
      </FormControl>
      </Flex>

    </form>
  )
}
