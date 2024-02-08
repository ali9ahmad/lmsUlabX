import { Flex, Box } from '@chakra-ui/react';
import MainImageLeftSide from '../components/MainImageLeftSide';
import RegisterFirstStep from '../components/RegisterFirstStep';

export default function UserRegister() {
  return (
    <>
      <Flex height="100vh" bg="gray.100">
        <Box w="50%" pt="150px" alignItems="center" justify="center">
          <MainImageLeftSide />
        </Box>

        <Box
          w="50%"
          pt="145px"
          alignItems="center"
          justify="center"
          bg="white"
          borderTopStartRadius="50px"
          borderBottomStartRadius="50px">
          <RegisterFirstStep />
        </Box>
      </Flex>
    </>
  );
}
