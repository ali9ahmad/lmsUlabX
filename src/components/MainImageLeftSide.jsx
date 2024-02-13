import { Box, Heading, Image } from '@chakra-ui/react';

export default function MainImageLeftSide() {
  return (
    <>
      <Box>
        <Heading
          as="h2"
          fontSize={{ sm: '15px', md: '25px', lg: '35px' }}
          w={{ sm: '300px', md: '370px', lg: '510px' }}
          mx="auto"
          color="blue.400">
          Learning Management system
        </Heading>
        <Box mt="45px" alignItems="center" mx="auto" align="center">
          <Image
            src="../../public/images/mainLeftSideImage.png"
            alt="MainLeftSideImage"
            w={{ sm: '300px', md: '450px', lg: '600px' }}
          />
        </Box>
      </Box>
    </>
  );
}
