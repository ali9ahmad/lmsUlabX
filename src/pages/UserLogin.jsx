import { Flex, Box, Text } from '@chakra-ui/react';
import MainImageLeftSide from '../components/MainImageLeftSide';
import UserLoginDetails from '../components/UserLoginDetails';
import MyVerHookForm from '../components/MyVerHookForm';

export default function UserLogin() {
  return (
    <>
      <Flex height="100vh" bg="gray.100">
        <Box w="50%" pt="150px" alignItems="center" justify="center">
          <MainImageLeftSide />
        </Box>

        <Box
          w="50%"
          pt="110px"
          alignItems="center"
          justify="center"
          bg="white"
          borderTopStartRadius="50px"
          borderBottomStartRadius="50px">
          {/* <UserLoginDetails /> */}
          <MyVerHookForm />
        </Box>
      </Flex>
    </>
  );
}
