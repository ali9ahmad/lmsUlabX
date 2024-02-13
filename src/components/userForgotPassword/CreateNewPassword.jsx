import { useForm } from 'react-hook-form';
import { UnlockIcon, ViewIcon } from '@chakra-ui/icons';
import { DevTool } from '@hookform/devtools';
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
  Text,
} from '@chakra-ui/react';

export default function CreateNewPassword() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { control, register, handleSubmit, formState } = form;

  const { errors, isSubmitting, isSubmitted, isDirty, isValid } = formState;

  const onSubmit = (data) => {
    console.log('form submitted', data);
  };

  return (
    <Box w={{ sm: 200, md: 400, lg: 700 }} mx="auto">
      <Box w="60%" mx="auto">
        <Heading as="h1" mb="25px" color="blue.900" fontSize="40px">
          Change Password
        </Heading>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormControl isInvalid={errors.password} isRequired color="black" mt="25px">
            <FormLabel htmlFor="password" fontSize="20px">
              Create New Password
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
                placeholder="Enter the new password"
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

          <FormControl isInvalid={errors.password} isRequired color="black" mt="25px">
            <FormLabel htmlFor="password" fontSize="20px">
              Re-enter the New Password
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
                placeholder="Please repeat the same password above"
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
            Confirm The New Password
          </Button>
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
