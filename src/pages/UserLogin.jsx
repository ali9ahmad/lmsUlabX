import { Flex, Box, Text } from '@chakra-ui/react';
import MainImageLeftSide from '../components/MainImageLeftSide';
import MyVerHookForm from '../components/MyVerHookForm';

export default function UserLogin() {
  return (
    <>
      <Flex height="100vh" bg="gray.100">
        <Box w="50%" pt="120px" alignItems="center" justify="center">
          <MainImageLeftSide />
        </Box>

        <Box
          w="50%"
          pt="120px"
          bg="white"
          borderTopStartRadius="50px"
          borderBottomStartRadius="50px">
          <MyVerHookForm />
        </Box>
      </Flex>
    </>
  );
}
