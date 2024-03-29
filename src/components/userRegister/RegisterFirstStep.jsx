import { useForm } from 'react-hook-form';
import { EmailIcon } from '@chakra-ui/icons';
import { DevTool } from '@hookform/devtools';
import { Link as ReactRouterLink } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';
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
  Icon,
  Text,
  Link as ChakraLink,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Stepper,
  useSteps,
} from '@chakra-ui/react';

export default function RegisterFirstStep() {
  // Const for Progress bar

  const steps = [
    { title: 'First Step', description: 'Main information' },
    { title: 'Second Step', description: 'OTP' },
  ];

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  // const for hook form

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { control, register, handleSubmit, formState } = form;

  const { errors, isDirty, isValid } = formState;

  // const issue = isDirty && !isValid;

  const onSubmit = (data) => {
    console.log('form submitted', data);
  };

  // ********************************

  return (
    <Box w={{ sm: 200, md: 400, lg: 700 }} mx="auto">
      <Box w="60%" mx="auto">
        <Heading as="h1" mb="25px" color="blue.900" fontSize="40px">
          Registration
        </Heading>

        <Stepper size="lg" index={activeStep}>
          {steps.map((index) => (
            <Step key={index}>
              <StepIndicator bg="white" color="black">
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>
              <StepSeparator />
              <StepSeparator />
            </Step>
          ))}
        </Stepper>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormControl isInvalid={errors.name} isRequired color="black" mt="25px">
            <FormLabel htmlFor="name" fontSize="20px">
              Enter Your Full Name
            </FormLabel>

            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={VscAccount} color="gray.400" />}
              />
              <Input
                type="name"
                id="name"
                w="100%"
                borderColor="gray.300"
                borderRadius="10px"
                placeholder="First Name (Middle Name) Surname"
                _placeholder={{ color: 'gray.400' }}
                _hover={{ borderColor: 'blue.300' }}
                {...register('name', {
                  required: 'This is required',
                })}
              />
            </InputGroup>
            {/* <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage> */}
            {isDirty ? (
              <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
            ) : null}
          </FormControl>

          <FormControl isInvalid={errors.email} isRequired color="black" mt="20px">
            <FormLabel htmlFor="email" fontSize="20px" color="black">
              Enter your Email Address
            </FormLabel>

            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.400" />} />
              <Input
                type="email"
                id="email"
                placeholder="email@example.com"
                _placeholder={{ color: 'gray.400' }}
                w="100%"
                borderColor="gray.300"
                borderRadius="10px"
                _hover={{ borderColor: 'blue.300' }}
                {...register('email', {
                  required: 'Email address is required',
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Invalid email format',
                  },
                })}
              />
            </InputGroup>

            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
          </FormControl>

          <ChakraLink
            as={ReactRouterLink}
            to="secondStep"
            _hover={{ textdecorationskipink: 'none' }}>
            {isValid ? (
              <Button
                _hover={{ boxShadow: 'lg' }}
                _active={{ bg: 'gray.100' }}
                mt="30px"
                w="100%"
                bg="gray.200"
                color="black"
                type="link">
                Next Step
              </Button>
            ) : (
              <Button
                isDisabled
                mt="30px"
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
