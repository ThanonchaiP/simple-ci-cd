'use client';

import {
  Box,
  Button,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import { PageHeader } from '@/components/share-components';
import {
  RuleConditions,
  RuleDetectionTime,
  RuleGeneral,
  conditionFormSchema,
  detectionTimeSchema,
  generalFormSchema,
} from '@/features/siem';

const steps = [
  {
    label: 'Step 1 General',
    form: <RuleGeneral />,
    schema: generalFormSchema,
  },
  {
    label: 'Step 2 Conditions',
    form: <RuleConditions />,
    schema: conditionFormSchema,
  },
  {
    label: 'Step 3 Detection Time',
    form: <RuleDetectionTime />,
    schema: detectionTimeSchema,
  },
];

const CreateDetectionRulePage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <PageHeader title="Create Detection Rule" />

      <Box sx={{ maxWidth: '100%' }}>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                sx={{ mb: 2 }}
                optional={
                  index === 2 ? (
                    <Typography variant="caption">
                      Last step
                    </Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                {step.form}
                <Box sx={{ mt: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={() =>
                        index !== steps.length - 1
                          ? handleNext()
                          : {}
                      }
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1
                        ? 'Finish'
                        : 'Continue'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
};

export default CreateDetectionRulePage;
