import React, { useRef } from "react";
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
  const testimonialsSection = useRef();
  const testimonialItems = state.source.get("/review/main");
  const testimonialData = state.source[testimonialItems.type][testimonialItems.id];
  const testimonialArr = testimonialData.acf.testimonial;
  const numberOfSteps = testimonialArr.length;
  const [currentStep, { setStep }] = useStep({
    maxStep: numberOfSteps,
    initialStep: 0,
  })

    return (
        <Flex id= "testimonials-section" ref={testimonialsSection} direction="column" align="center" bg="brand.800" borderTop="2px solid black" borderBottom="2px solid black">
          <Flex direction="column" justify="center" minWidth="50%" ml="15%" mr="15%" mt={20} mb={3}>
            
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

            <Container display="flex" justifyContent="center" alignItems="center" minH="40">
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
            
          </>

          </Flex>
        </Flex>
    )
  }

  export default connect(Testimonials);
  