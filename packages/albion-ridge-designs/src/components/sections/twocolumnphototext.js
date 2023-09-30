import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import {
    Flex,
    Heading,
    Image,
    Text,
    SimpleGrid,
    Box,
    Button,
    Link as ChakraLink
  } from "@chakra-ui/react";
  
  function TwoColumnPhotoText({ backgroundColor, buttonLink, buttonText, heading, subheading, headingFont, subheadingFont, image, imageSide, text, textColor, height, spacing, libraries }) {
    const Html2React = libraries.html2react.Component;  
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
        <>
        {imageSide === "left" &&
            <SimpleGrid columns={{base: 1, md: 2}} spacing={spacing} minHeight="fit-content" height={finalHeight}>
                
                <Box
                    backgroundImage={image}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat" 
                >
                    <Image src={image} display={{base: "block", md: "none", lg: "none"}} />
                </Box>
           
                    <Flex p={{base: 10, sm: 20}} bg={backgroundColor} color={textColor} alignItems="center" justifyContent="flex-start">
                        <Box maxWidth="500px">
                            <Flex direction="column">
                                {heading &&
                                <Heading size="lg" color={textColor} pb={2} fontFamily={headingFont} fontWeight="500">{heading}</Heading>
                                }
                                {subheading &&
                                <Heading size="md" color={textColor} fontFamily={subheadingFont} fontWeight="500">{subheading}</Heading>
                                }
                                {text &&
                                <Text pb={5} pt={6} color={textColor} textAlign="justify" className="page-text">
                                    <Html2React html={text} />
                                </Text>
                                }
                                {buttonText &&
                                <Flex width="100%" justifyContent="flex-end">
                                    <ChakraLink href={buttonLink}>
                                        <Button width="fit-content" borderWidth="2px">{buttonText}</Button>
                                    </ChakraLink>
                                </Flex>
                                }
                            </Flex>
                        </Box>
                    </Flex>
        
            </SimpleGrid>
        }

        {imageSide === "right" &&
            <SimpleGrid columns={{base: 1, md: 2}} spacing={spacing} minHeight="fit-content" height={finalHeight}>
                <Flex p={{base: 10, sm: 20}} bg={backgroundColor} color={textColor} alignItems="center" justifyContent="flex-end">
                    <Box maxWidth="500px">
                        <Flex direction="column">
                            {heading &&
                            <Heading size="lg" color={textColor} pb={2} fontFamily={headingFont} fontWeight="500">{heading}</Heading>
                            }
                            {subheading &&
                            <Heading size="md" color={textColor} fontFamily={subheadingFont} fontWeight="500">{subheading}</Heading>
                            }
                            {text &&
                            <Text pb={5} pt={6} color={textColor} textAlign="justify" className="page-text">
                                <Html2React html={text} />
                            </Text>
                            }
                            {buttonText &&
                            <Flex width="100%" justifyContent="flex-end">
                                <ChakraLink href={buttonLink}>
                                    <Button width="fit-content" borderWidth="2px">{buttonText}</Button>
                                </ChakraLink>
                            </Flex>
                            }
                        </Flex>
                    </Box>
                </Flex>
        
                <Box
                    backgroundImage={image}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat" 
                >
                    <Image src={image} display={{base: "block", md: "none", lg: "none"}} />
                </Box>
           
            </SimpleGrid>
        }
        </>
      )
  }
  
  export default connect(TwoColumnPhotoText);
