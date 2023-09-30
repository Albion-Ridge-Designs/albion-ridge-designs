import React from "react";
import {
  Button,
  Heading,
  Text,
  Textarea,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Box,
  Container,
  HStack,
  Stack
} from '@chakra-ui/react';
import { 
    useForm,
    useFormState
} from "react-hook-form";
import emailjs from "emailjs-com";
import { ErrorMessage } from "@hookform/error-message";
import { Step } from './step';
import { useStep } from './useStep';

function StepWrapper({ id, setStep, currentStep }) {
//   const numberOfSteps = 3
//   const [currentStep, { setStep }] = useStep({
//     maxStep: numberOfSteps,
//     initialStep: 0,
//   })
    return (
        <Flex direction="column" align="center" bg="brand.600">
            <Step
            key={id}
            cursor="pointer"
            onClick={() => setStep(id)}
            isActive={currentStep === id}
            />
      </Flex>
    )
  }

  export default StepWrapper;
  