import { useState } from 'react';
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
} from '@chakra-ui/react';

const UserLoginDetails = () => {
  const [input, setInput] = useState('');

  const handleEmailInput = (e) => setInput(e.target.value);

  const isError = input === '';

  return (
    <>
      <Box w="800px" mx="auto">
        <Heading as="h1" mb="45px" color="blue.900" fontSize="40px">
          Вход в платформу
        </Heading>
        <FormControl isRequired color="black" isInvalid={isError}>
          <FormLabel fontSize="20px">Email или номер телефона</FormLabel>
          <Input
            type="email"
            value={input}
            onChange={handleEmailInput}
            borderColor="gray.300"
            w="100%"
            h="55px"
            borderRadius="10px"
            _hover={{ borderColor: 'blue.300' }}
          />
          {isError ? <FormErrorMessage>Неверный Email или номер телефона</FormErrorMessage> : null}
        </FormControl>
        <FormControl isRequired color="black" mt="25px">
          <FormLabel fontSize="20px">Пароль</FormLabel>
          <Input
            type="password"
            borderColor="gray.300"
            w="100%"
            h="55px"
            _hover={{ borderColor: 'blue.300' }}
          />
          {<FormErrorMessage>Неверный пароль</FormErrorMessage>}
        </FormControl>

        <Flex justify="space-between" mt="30px">
          <FormControl display="flex" alignItems="center" color="black">
            <Checkbox name="rememberMe" size="lg" colorScheme="blue" borderColor="gray.300" />
            <FormLabel mb="0" ml="15px">
              Запомнить меня
            </FormLabel>
          </FormControl>
          <Link
            color="blue.500"
            href="#"
            w="170px"
            fontWeight="semibold"
            textDecoration="underline"
            textDecorationSkipInk="15px"
            _hover={{ color: 'blue.600' }}>
            Забыли пароль?
          </Link>
        </Flex>

        <Button
          bg="blue.500"
          h="55px"
          _hover={{ color: 'white.900', boxShadow: 'lg' }}
          mt="50px"
          w="100%"
          color="white">
          Войти
        </Button>
        <Button
          variant="outline"
          borderColor="gray.300"
          h="55px"
          _hover={{ borderColor: 'blue.300', boxShadow: 'md' }}
          mt="20px"
          w="100%"
          color="blue.500">
          Зарегистрироваться
        </Button>

        <Box position="fixed" bottom={6} left={240} width="100%" textAlign="center" py={2}>
          <Text color="gray.500" alignSelf="bottom" fontWeight="semibold">
            Copyright © URecruit. Все права защищены
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default UserLoginDetails;
