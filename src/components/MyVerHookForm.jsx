import { useForm } from 'react-hook-form';
import { EmailIcon, UnlockIcon, ViewIcon } from '@chakra-ui/icons';
import { DevTool } from '@hookform/devtools';
import { Link as ReactRouterLink } from 'react-router-dom';
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
  InputRightElement,
  Flex,
  Checkbox,
  Link,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';

export default function MyVerHookForm() {
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

  const { errors, isSubmitting, isSubmitted, isDirty, isValid } = formState;

  const onSubmit = (data) => {
    console.log('form submitted', data);
  };

  return (
    <Box w={{ sm: 200, md: 400, lg: 700 }} mx="auto">
      <Box w="60%" mx="auto">
        <Heading as="h1" mb="45px" color="blue.900" fontSize="40px">
          Login to Platform
        </Heading>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormControl isInvalid={errors.email} isRequired color="black">
            <FormLabel htmlFor="email" fontSize="20px" color="black">
              Enter your Email
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

          <FormControl isInvalid={errors.password} isRequired color="black" mt="25px">
            <FormLabel htmlFor="password" fontSize="20px">
              Enter your Password
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<UnlockIcon color="gray.400" />}
                size="xl"
              />
              <Input
                type="password"
                id="password"
                w="100%"
                borderColor="gray.300"
                borderRadius="10px"
                placeholder="••••••••"
                _placeholder={{ color: 'gray.400' }}
                _hover={{ borderColor: 'blue.300' }}
                {...register('password', {
                  required: 'This is required',
                })}
              />
              <InputRightElement
                pointerEvents="pointer"
                children={<ViewIcon color="gray.400" />}
                size="xl"
              />
            </InputGroup>
            <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
          </FormControl>

          <Flex justify="space-between" mt="15px">
            <FormControl display="flex" alignItems="center" color="black">
              <Checkbox name="rememberMe" size="lg" colorScheme="blue" borderColor="gray.300" />
              <FormLabel mb="0" ml="15px">
                Remember me
              </FormLabel>
            </FormControl>

            <ChakraLink
              as={ReactRouterLink}
              to="forgotPassword"
              textdecorationskipink="none"
              color="blue.500"
              href="#"
              w="190px"
              fontWeight="semibold"
              textDecoration="underline"
              _hover={{ color: 'blue.600' }}>
              Forget Password?
            </ChakraLink>
          </Flex>

          <Button
            disabled={!isDirty || !isValid}
            bg="blue.500"
            _hover={{ color: 'white.900', boxShadow: 'lg' }}
            mt="30px"
            w="100%"
            color="white"
            isLoading={isSubmitting}
            type="submit">
            Login
          </Button>

          <ChakraLink
            as={ReactRouterLink}
            to="userRegister"
            _hover={{ textdecorationskipink: 'none' }}>
            <Button
              variant="outline"
              borderColor="gray.300"
              _hover={{ borderColor: 'gray.400', boxShadow: 'md' }}
              mt="20px"
              w="100%"
              color="blue.500">
              Register
            </Button>
          </ChakraLink>
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
