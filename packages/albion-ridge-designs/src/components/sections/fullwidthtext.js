import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import {
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Link as ChakraLink,
    Icon,
    ArrowRightIcon
  } from "@chakra-ui/react";
  import { FaArrowRight } from "react-icons/fa";
  
  function FullWidthText({ backgroundColor, buttonLink, buttonText, buttonPosition, heading, subheading, headingFont, subheadingFont, headingPosition, text, textColor, libraries}) {
    const Html2React = libraries.html2react.Component;
    const [buttonFlex, setButtonFlex] = useState("center");
    const [headingFlex, setHeadingFlex] = useState("center");
    useEffect(() => {
        if (buttonPosition === "center") {
            setButtonFlex("center");
          }
          if (buttonPosition === "right") {
            setButtonFlex("flex-end")
          }
    }, [buttonPosition])
    useEffect(() => {
        if (headingPosition === "center") {
            setHeadingFlex("center");
          }
          if (headingPosition === "left") {
            setHeadingFlex("flex-start")
          }
    }, [headingPosition])
      return (
        <Flex direction="column" justifyContent="center" alignItems="center" bg={backgroundColor}>
            <Flex direction="column" justifyContent="center" alignItems="center" bg={backgroundColor} m={{base: 10, md: 20}} color="brand.100" maxWidth="1200px">
                <Flex direction="column" width="100%" alignItems={headingFlex}>
                    {heading && 
                    <Heading size="lg" mb={3} color={textColor} fontWeight="500" fontFamily={headingFont} textAlign="center">{heading}</Heading>
                    }
                    {subheading &&
                    <Heading size="md" color={textColor} fontFamily={subheadingFont} fontWeight="500" textAlign="center">{subheading}</Heading>
                    }
                </Flex>
                {text &&
                <Text mt={5} color={textColor} textAlign="justify" className="page-text"><Html2React html={text} /></Text>
                }
                {buttonText &&
                    <Flex width="100%" justifyContent={buttonFlex}>
                        <ChakraLink href={buttonLink} mt={10} style={{ textDecoration: "none" }}>
                            <Button>{buttonText} <Icon as={FaArrowRight} ml={2} /></Button>
                        </ChakraLink>
                    </Flex>
                }
            </Flex>
        </Flex>
      )
  }
  
  export default connect(FullWidthText);
