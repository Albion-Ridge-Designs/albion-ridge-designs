import React, { useState, useEffect } from "react"
import {
    Flex,
    Box,
    Heading,
    Text
  } from "@chakra-ui/react"
  import { styled } from "frontity";
  
  function Parallax({ image, heading, subheading, headingFont, subheadingFont, text, textColor, includeText, height, position }) {
    const [finalHeight, setFinalHeight] = useState();
    useEffect(() => {
        if (height) {
            setFinalHeight(`${height}px`);
          }
          if (!height) {
            setFinalHeight("fit-content")
          }
    }, [height])

      return (
        <Box height={{base: "fit-content", md: finalHeight}}>
        <ParallaxWindow style={{backgroundImage: `url("${image}")`, backgroundPosition: `${position}` }}>
            <Flex
                height={finalHeight}
                width="100%"
                justifyContent="center"
                alignItems="center"
            >
                {includeText &&
                <Flex direction="column" p={20}>
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
                }
            </Flex>
        
        </ParallaxWindow>
        </Box>
      )
  }
  
  export default Parallax;

  const ParallaxWindow = styled.div`
    background-size: cover;
    height: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    position: relative;
    z-index: 0;

    @media (max-width: 768px) { 
      background-size: 100%;
      height: 100%;
      background-attachment: scroll;
      background-repeat: no-repeat;
    }

    &:before {
        background: rgba(0, 0, 0, 0.5);
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
    }
  `
