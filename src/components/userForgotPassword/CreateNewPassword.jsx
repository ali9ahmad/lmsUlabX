import { useForm } from 'react-hook-form';
import { UnlockIcon, ViewIcon } from '@chakra-ui/icons';
import { DevTool } from '@hookform/devtools';
import { Link as ReactRouterLink } from 'react-router-dom';
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
  Link as ChakraLink,
} from '@chakra-ui/react';

export default function CreateNewPassword() {
  const form = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });
  const { control, register, handleSubmit, formState } = form;

  const { errors, isSubmitting, isSubmitted, isDirty, isValid } = formState;

  const onSubmit = (data) => {
    console.log('form submitted', data);
  };

  const isPasswordMatch = (value) => {
    const confirmPasswordValue = form.watch('confirmPassword');
    return value === confirmPasswordValue;
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
                  validate: (value) => isPasswordMatch(value) || "Passwords don't match",
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

          <FormControl isInvalid={errors.confirmPassword} isRequired color="black" mt="25px">
            <FormLabel htmlFor="confirmPassword" fontSize="20px">
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
                id="confirmPassword"
                w="100%"
                borderColor="gray.300"
                borderRadius="10px"
                placeholder="Please repeat the same password above"
                _placeholder={{ color: 'gray.400' }}
                _hover={{ borderColor: 'blue.300' }}
                {...register('confirmPassword', {
                  required: 'This is required',
                  validate: (value) => isPasswordMatch(value) || "Passwords don't match",
                })}
              />
              <InputRightElement
                pointerEvents="pointer"
                children={<ViewIcon color="gray.400" />}
                size="xl"
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.confirmPassword && errors.confirmPassword.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl display="flex" alignItems="center" color="black" mt="15px">
            <Checkbox name="rememberMe" size="lg" colorScheme="blue" borderColor="gray.300" />
            <FormLabel mb="0" ml="15px">
              Remember me
            </FormLabel>
          </FormControl>

          {/* <Button
            disabled={!isDirty || !isValid}
            bg="blue.500"
            _hover={{ color: 'white.900', boxShadow: 'lg' }}
            mt="30px"
            w="100%"
            color="white"
            isLoading={isSubmitting}
            type="submit">
            Confirm The New Password
          </Button> */}

          <ChakraLink as={ReactRouterLink} to="#" _hover={{ textdecorationskipink: 'none' }}>
            {isValid ? (
              <Button
                _hover={{ boxShadow: 'lg' }}
                _active={{ bg: 'blue.500' }}
                mt="15px"
                w="100%"
                bg="blue.400"
                color="white"
                type="link">
                Next Step
              </Button>
            ) : (
              <Button
                isDisabled
                mt="15px"
                w="100%"
                bg="gray.400"
                color="black"
                type="link"
                _hover={{ bg: 'gray.500' }}>
                Next Step
              </Button>
            )}
          </ChakraLink>
        </form>

        <DevTool control={control} />
        <Box position="fixed" bottom={6} left={240} width="100%" textAlign="center" py={2}>
          <Text color="gray.400" alignSelf="bottom" fontWeight="semibold">
            Copyright © URecruit. All rights are reserved.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
