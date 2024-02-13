import {
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
  Box,
  Progress,
} from '@chakra-ui/react';

const ForgotPassword = () => {
  const steps = [
    { title: 'First', description: 'Contact Info' },
    { title: 'Second', description: 'Date & Time' },
    { title: 'Second', description: 'Date & Time' },
  ];

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;

  return (
    <Box position="relative">
      <Stepper size="lg" index="activeStep" gap="0">
        {steps.map(( index) => (
          <Step key={index} gap="0">
            <StepIndicator bg="white">
              <StepStatus complete={<StepIcon />} />
            </StepIndicator>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Progress
        value={progressPercent}
        position="absolute"
        hight="3px"
        width="full"
        top="12px"
        zIndex={-1}
      />
    </Box>
  );
};

export default ForgotPassword;
