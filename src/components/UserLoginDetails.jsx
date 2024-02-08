import { useState } from 'react';
import { EmailIcon, UnlockIcon, ViewIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  Box,
  Flex,
  Button,
  Text,
  Checkbox,
  Link,
  InputLeftElement,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

const UserLoginDetails = () => {
  const [input, setInput] = useState('');

  const handleEmailInput = (e) => setInput(e.target.value);

  const [submitted, setSubmitted] = useState(false);

  const isError = input === '' && submitted === true;

  return (
    <>
      <Box w="800px" mx="auto">
        <Heading as="h1" mb="45px" color="blue.900" fontSize="40px">
          Login to Platform
        </Heading>
        <FormControl isRequired color="black" isInvalid={isError}>
          <FormLabel fontSize="20px">Email or phone number</FormLabel>
          <InputGroup size="lg">
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.400" />}
              size="xl"
            />
            <Input
              type="email"
              value={input}
              onChange={handleEmailInput}
              borderColor="gray.300"
              w="100%"
              // h="55px"
              borderRadius="10px"
              _hover={{ borderColor: 'blue.300' }}
            />
          </InputGroup>
          {isError ? <FormErrorMessage>Wrong Email or phone number</FormErrorMessage> : null}
        </FormControl>
        <FormControl isRequired color="black" mt="25px" isInvalid={isError}>
          <FormLabel fontSize="20px">Password</FormLabel>
          <InputGroup size="lg">
            <InputLeftElement
              pointerEvents="none"
              children={<UnlockIcon color="gray.400" />}
              size="xl"
            />
            <Input
              type="password"
              borderColor="gray.300"
              w="100%"
              // h="55px"
              _hover={{ borderColor: 'blue.300' }}
            />
            <InputRightElement
              pointerEvents="pointer"
              children={<ViewIcon color="gray.400" />}
              size="xl"
            />
          </InputGroup>
          {isError ? (
            <FormErrorMessage>Wrong Email or phone number or Password</FormErrorMessage>
          ) : null}
        </FormControl>

        <Flex justify="space-between" mt="30px">
          <FormControl display="flex" alignItems="center" color="black">
            <Checkbox name="rememberMe" size="lg" colorScheme="blue" borderColor="gray.300" />
            <FormLabel mb="0" ml="15px">
              Remember me
            </FormLabel>
          </FormControl>
          <Link
            color="blue.500"
            href="#"
            w="170px"
            fontWeight="semibold"
            textDecoration="underline"
            textdecorationskipink="15px"
            _hover={{ color: 'blue.600' }}>
            Forget Password?
          </Link>
        </Flex>

        <Button
          bg="blue.500"
          h="55px"
          _hover={{ color: 'white.900', boxShadow: 'lg' }}
          mt="50px"
          w="100%"
          color="white">
          Login
        </Button>
        <Button
          variant="outline"
          borderColor="gray.300"
          h="55px"
          _hover={{ borderColor: 'blue.300', boxShadow: 'md' }}
          mt="20px"
          w="100%"
          color="blue.500">
          Register
        </Button>

        <Box position="fixed" bottom={6} left={240} width="100%" textAlign="center" py={2}>
          <Text color="gray.500" alignSelf="bottom" fontWeight="semibold">
            Copyright © URecruit. All rights are reserved.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default UserLoginDetails;
