import { Flex, Box } from '@chakra-ui/react';
import MainImageLeftSide from '../components/MainImageLeftSide';
import { Outlet } from 'react-router-dom';
import RegisterFirstStep from '../components/userRegister/RegisterFirstStep';

export default function UserForgotPassLayout() {
  return (
    <>
      <Flex height="100vh" bg="gray.100">
        <Box w="50%" pt="150px" alignItems="center" justify="center">
          <MainImageLeftSide />
        </Box>

        <Box
          w="50%"
          pt="150px"
          alignItems="center"
          justify="center"
          bg="white"
          borderTopStartRadius="50px"
          borderBottomStartRadius="50px">
          <Outlet />
        </Box>
      </Flex>
    </>
  );
}
