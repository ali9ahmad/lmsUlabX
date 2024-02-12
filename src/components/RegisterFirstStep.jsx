import { useForm } from 'react-hook-form';
import { EmailIcon, UnlockIcon, ViewIcon } from '@chakra-ui/icons';
import { DevTool } from '@hookform/devtools';
import { Link as ReactRouterLink } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Heading,
  InputGroup,
  InputLeftElement,
  Icon,
  Flex,
  Checkbox,
  Link,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';

export default function RegisterFirstStep() {
  // const {
  //   handleSubmit,
  //   register,
  //   formState: { errors, isSubmitting },
  // } = useForm();

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    // mode: 'all',
  });
  const { control, register, handleSubmit, formState } = form;

  const { errors, isDirty, isValid } = formState;

  const onSubmit = (data) => {
    console.log('form submitted', data);
  };

  return (
    <Box w={{ sm: 200, md: 400, lg: 700 }} mx="auto">
      <Box w="60%" mx="auto">
        <Heading as="h1" mb="45px" color="blue.900" fontSize="40px">
          Registration
        </Heading>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormControl isInvalid={errors.name} isRequired color="black" mt="25px">
            <FormLabel htmlFor="name" fontSize="20px">
              Inter Your Full Name
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={VscAccount} color="gray.400" />}
              />
              <Input
                type="name"
                id="name"
                w="100%"
                borderColor="gray.300"
                borderRadius="10px"
                placeholder="Name (Middle Name) Surname"
                _placeholder={{ color: 'gray.400' }}
                _hover={{ borderColor: 'blue.300' }}
                {...register('name', {
                  required: 'This is required',
                })}
              />
            </InputGroup>
            <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.email} isRequired color="black" mt="20px">
            <FormLabel htmlFor="email" fontSize="20px" color="black">
              Enter your Email Address
            </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.400" />} />
              <Input
                type="email"
                id="email"
                placeholder="email@example.com"
                _placeholder={{ color: 'gray.400' }}
                w="100%"
                borderColor="gray.300"
                borderRadius="10px"
                _hover={{ borderColor: 'blue.300' }}
                {...register('email', {
                  required: 'Email address is required',
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Invalid email format',
                  },
                })}
              />
            </InputGroup>
            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
          </FormControl>

          <Button
            disabled={!isDirty || !isValid}
            bg="gray.300"
            color="black"
            _hover={{ boxShadow: 'lg' }}
            mt="35px"
            w="100%"
            type="submit">
            Login
          </Button>
        </form>

        <DevTool control={control} />

        <Box position="fixed" bottom={6} left={240} width="100%" textAlign="center" py={2}>
          <Text color="gray.500" alignSelf="bottom" fontWeight="semibold">
            Copyright © URecruit. All rights are reserved.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
