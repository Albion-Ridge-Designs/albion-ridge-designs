import React from "react";
import {
    Flex,
    Box,
    Heading,
    Text
  } from "@chakra-ui/react";
  
  function HeadingBanner({ backgroundColor, heading, subheading, headingFont, subheadingFont, text, textColor}) {
      return (
        <Box height="fit-content" bg={backgroundColor}>
            <Flex
                direction="column"
                height="100%"
                width="100%"
                justifyContent="center"
                alignItems="center"
            >
                <Flex direction="column" p={{base: 10, md: 20}}>
                    {heading && 
                    <Heading size="2xl" mb={3} color={textColor} fontWeight="500" fontFamily={headingFont} textAlign="center">{heading}</Heading>
                    }
                    {subheading &&
                    <Heading size="lg" color={textColor} fontFamily={subheadingFont} fontWeight="500" textAlign="center">{subheading}</Heading>
                    }
                    {text &&
                    <Text mt={5} color={textColor} textAlign="center">{text}</Text>
                    }
                </Flex>
            </Flex>
        </Box>
      )
  }
  
  export default HeadingBanner;
