import { useForm } from 'react-hook-form';
import { EmailIcon, UnlockIcon, ViewIcon } from '@chakra-ui/icons';
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
  Checkbox,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react';

export default function RegisterSecondStep() {
  // Const for Progress bar

  const steps = [
    { title: 'First Step', description: 'Main information' },
    { title: 'Second Step', description: 'OTP' },
  ];

  const { activeStep } = useSteps({
    index: 2,
    count: steps.length,
  });

  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;

  // const for hook form

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    // mode: 'all',
  });
  const { control, register, handleSubmit, formState } = form;

  const { errors, isDirty, isValid } = formState;

  const onSubmit = (data) => {
    console.log('form submitted', data);
  };

  return (
    <Box w={{ sm: 200, md: 400, lg: 700 }} mx="auto">
      <Box w="60%" mx="auto">
        <Heading as="h1" mb="45px" color="blue.900" fontSize="40px">
          Registration
        </Heading>

        <Box position="relative">
          <Stepper size="lg" index={activeStep}>
            {steps.map((index) => (
              <Step key={index}>
                <StepIndicator bg="white" color="black">
                  <StepStatus complete={<StepIcon />} active={<StepNumber />} />
                </StepIndicator>
                <StepSeparator />
                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormControl isInvalid={errors.name} isRequired color="black" mt="25px">
            <FormLabel htmlFor="number" fontSize="20px">
              Confirmation Code
            </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<UnlockIcon color="gray.400" />} />
              <Input
                type="number"
                id="number"
                w="100%"
                borderColor="gray.300"
                borderRadius="10px"
                placeholder="Please Enter OTP here"
                _placeholder={{ color: 'gray.400' }}
                _hover={{ borderColor: 'blue.300' }}
                {...register('number', {
                  required: 'This is required',
                })}
              />
            </InputGroup>
            <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
          </FormControl>

          <FormControl display="flex" alignItems="center" color="gray.500" mt="25px">
            <Checkbox
              name="rememberMe"
              size="lg"
              colorScheme="gray"
              borderColor="gray.300"
              mb="16px"
            />
            <FormLabel mb="0" ml="15px">
              By pressing the "Register" button, you will agree to all terms and conditions
            </FormLabel>
          </FormControl>

          <Button
            disabled={!isDirty || !isValid}
            bg="blue.400"
            color="white"
            _hover={{ boxShadow: 'lg' }}
            mt="35px"
            w="100%"
            type="submit">
            Register
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
