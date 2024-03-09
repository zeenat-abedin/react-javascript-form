import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Flex,
  Button,
  Select,
  IconButton,
} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import { useFieldArray, useForm } from 'react-hook-form'

export default function HookForm({handleFormData}) {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting }
  } = useForm({
      defaultValues: {
        techStack: [{ name: "" }],
      }
    })
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: "techStack",
  });

  function onSubmit(values) {
    handleFormData(null)
    return new Promise((resolve) => {
      setTimeout(()=>{
        handleFormData(values)
        resolve()
      }, 3000)
    })   
  }
  return (
    <form  onSubmit={handleSubmit(onSubmit)}>
      <h1>Basic Details</h1>
      <Flex mt={4} gap={4}>
        <FormControl isInvalid={errors.firstName ? true: undefined} isRequired w="50%">
          <FormLabel htmlFor='firstname'>
            First name
          </FormLabel>
          <Input id='firstname' placeholder='Enter First name' bg="#D9D9D9" />
          <FormErrorMessage>
            Error message
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.lastname ? true: undefined} w="50%">
          <FormLabel htmlFor='lastname' >
            Last name
          </FormLabel>
          <Input id='lastname' placeholder='Enter Last name' bg="#D9D9D9" />
        </FormControl>
      </Flex>
      <Flex mt={4} gap={4}>
      <FormControl isInvalid={errors.email ? true : undefined} mb={4}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" placeholder="Enter Email" {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Email format is incorrect",
          },})}              
          bg="#D9D9D9" />
          <FormErrorMessage>
            Please enter a valid email address.
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={false} isRequired>
        <FormLabel htmlFor="phone">Phone number</FormLabel>
          <Input
            id="phone"
            placeholder="Enter Phone"
            {...register("phone", {
                required: "Mobile number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Mobile format is incorrect",
          },
          })}        
          bg="#D9D9D9" />
        <FormErrorMessage>
            Please enter a valid number.
        </FormErrorMessage>
      </FormControl>       
      </Flex>

      <h1>Other Information</h1>
      <Flex mt={4} gap={4}>
        <FormControl isInvalid={false} flexDir="column">
          <FormLabel htmlFor="gender">Gender</FormLabel>
          <Select placeholder="Select Gender" bg="#D9D9D9">
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

      <FormControl mb="4">
      <Flex direction="row" justifyContent="space-between" alignItems="center" mt={6}>
          <h2>Tech Stack</h2>
          <IconButton aria-label='Add tech stack' icon={<AddIcon />} mt={4} colorScheme="teal" onClick={()=> append({name: ""})} 
          />
        </Flex>
        <FormControl>
          <FormLabel htmlFor='techStack'>Tech Stack</FormLabel>
          {
            fields.map((item, index) => 
              <Flex key={item.id} direction="column" mb={3}>
                <Flex>
                <Input {...register(`techStack.${index}.name`, {
                 required: 'Techstack is required' 
                })} bg="#D9D9D9" placeholder='Enter Tech Stack' 
                    defaultValue={item.name} />   
                {
                index > 0 && (
                  <IconButton aria-label='Remove field' icon={<MinusIcon />} onClick={() => remove(index)} ml={2} colorScheme='red'/>
                )
                }
                </Flex> 
              </Flex>  
            )           
          }        
        </FormControl>
      </FormControl>


      <Button type="submit" colorScheme='teal'>Submit</Button>
    </form>
  )
}
