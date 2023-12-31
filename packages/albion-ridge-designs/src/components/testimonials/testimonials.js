import React from "react";
import { connect } from "frontity";
import {
  Flex,
  Container,
  HStack,
  Box
} from '@chakra-ui/react';
import { Step } from './step';
import { useStep } from './useStep';
import TestimonialCard from "./testimonialcard";

function Testimonials({ state }) {
  const testimonialItems = state.source.get("/review/main");
  const testimonialData = state.source[testimonialItems.type][testimonialItems.id];
  const displaySection = testimonialData.acf.display_section;
  const testimonialArr = testimonialData.acf.testimonial;
  const numberOfSteps = testimonialArr.length;
  const [currentStep, { setStep }] = useStep({
    maxStep: numberOfSteps,
    initialStep: 0,
  })

  if (displaySection === true) {
    return (
        <Flex id={testimonialData.acf.section_id} direction="column" align="center" bg="brand.800" borderTop="2px solid black" borderBottom="2px solid black">
          <Flex direction="column" justify="center" minWidth="50%" ml={10} mr={10} mt={20} mb={20}>
            
          <>
            <Flex direction="column">
              {testimonialArr.map((testimonial, id) => (
                <Box key={id}>
                  {currentStep === id &&
                    <TestimonialCard
                      // logo={<Plumtic h="6" color="gray.400" />}
                      author={testimonial.name}
                      role={testimonial.role}
                      colorScheme={testimonial.accent_color}
                      image={testimonial.headshot}
                      key={id}
                    >
                    {testimonial.testimonial_content}
                  </TestimonialCard>
                  }
                </Box>
                  ))}
            </Flex>
            
            {numberOfSteps.length > 1 &&
              <Container display="flex" justifyContent="center" alignItems="center" marginTop={10}>
                <HStack spacing="3" width="40">
                  {[...Array(numberOfSteps)].map((_, id) => (
                    <Step
                      key={id}
                      cursor="pointer"
                      onClick={() => setStep(id)}
                      isActive={currentStep === id}
                    />
                  ))}
                </HStack>
              </Container>
            }
            
          </>

          </Flex>
        </Flex>
    )
    }
    if (displaySection === false) {
      return (
          <></>
      )
  }
  }

  export default connect(Testimonials);
  