import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Heading,
  Box,
  Grid,
  GridItem,
  Flex,
  Button,
  Text,
} from '@chakra-ui/react';

const UserLoginDetails = () => {
  return (
    <>
      <Box w="800px" mx="auto">
        <Heading as="h1" mb="45px" color="blue.900" fontSize="40px">
          Вход в платформу
        </Heading>
        <FormControl isRequired color="black">
          <FormLabel fontSize="20px">Email или номер телефона</FormLabel>
          <Input type="email" borderColor="gray.300" w="100%" h="55px" borderRadius="10px" />
        </FormControl>
        <FormControl isRequired color="black" mt="25px">
          <FormLabel fontSize="20px">Пароль</FormLabel>
          <Input type="password" borderColor="gray.300" w="100%" h="55px" />
        </FormControl>
        <Flex justify="space-between" mt="30px">
          <GridItem bg="green">remember me</GridItem>
          <GridItem bg="yellow">Forget Password</GridItem>
        </Flex>

        <Button
          bg="blue.500"
          h="55px"
          _hover={{ bg: 'blue.700', color: 'white.900' }}
          mt="50px"
          w="100%"
          color="white">
          Войти
        </Button>
        <Button
          variant="outline"
          borderColor="gray.300"
          h="55px"
          mt="20px"
          w="100%"
          color="blue.500">
          Зарегистрироваться
        </Button>
        <Box position="fixed" bottom={6} left={230} width="100%" textAlign="center" py={2}>
          <Text color="gray.500" alignSelf="bottom">
            Copyright © URecruit. Все права защищены
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default UserLoginDetails;
