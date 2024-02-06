import { Flex, Box, Heading, Image } from '@chakra-ui/react';

export default function MainImageLeftSide() {
  return (
    <>
      <Heading as="h2" fontSize="3xl" w="430px" mx="auto" color="blue.400">
        Learning Management system
      </Heading>
      <Box mt="45px" alignItems="center" mx="auto" align="center">
        <Image src="../../public/images/mainLeftSideImage.png" alt="main image" w="700px" />
      </Box>
    </>
  );
}
