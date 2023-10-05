import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import {
    Flex,
    Heading,
    Image,
    Text,
    SimpleGrid,
    Button,
    Link as ChakraLink,
    useMediaQuery
  } from "@chakra-ui/react";
  
  function TwoColumnPhotoTextSmall({ backgroundColor, buttonLink, buttonText, heading, subheading, headingFont, subheadingFont, image, imageSide, text, textColor, height, html, includeBorder, spacing, libraries }) {
    const Html2React = libraries.html2react.Component;  
    const [finalHeight, setFinalHeight] = useState();
    const [isSmallerThan480] = useMediaQuery('(max-width:480px)');
    const [isSmallerThan768] = useMediaQuery('(max-width: 768px)')
    const [borderVal, setBorderVal] = useState("2px solid");
    useEffect(() => {
        if (includeBorder) {
            setBorderVal("2px solid")
        }
        if (!includeBorder) {
            setBorderVal("0px solid")
        }
    }, [])
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
            <Flex direction="column" justifyContent="center" alignItems="center" bg={backgroundColor}>
                <Flex direction="row" justifyContent="center" alignItems="center" m={{base: 10, md: 20}} color="brand.100" height="fit-content" maxWidth="1200px">
                    <SimpleGrid columns={{base: 1, md: 2}} spacing={2} minHeight="fit-content" maxWidth="1200px">

                        {!isSmallerThan768 &&
                            <Flex direction="column" justifyContent="center" width="100%" alignItems="flex-start" backgroundImage={image} backgroundSize="cover" backgroundPosition="center" borderRadius="30px" borderColor="brand.200" border={borderVal}>
                            </Flex>
                        }
                        {isSmallerThan768 &&
                            // <Flex direction="column" justifyContent="center" width="100%" height="500px" alignItems="flex-start">
                                <Image width="100%" src={image} borderRadius="30px" borderColor="brand.200" border={borderVal} />
                            // </Flex>
                        }

                        <Flex direction="column" justifyContent="center" mt={{base: 5, md: 0}} p={{base: 0, md: 10}}>
                            {heading &&
                            <Heading size="lg" color={textColor} fontFamily={headingFont} fontWeight="500">{heading}</Heading>
                            }
                            {subheading &&
                            <Heading size="md" color={textColor} fontFamily={subheadingFont} fontWeight="500" mt={{base: 1, md: 2}}>{subheading}</Heading>
                            }
                            {text && !html &&
                            <Text color={textColor} textAlign="justify" className="page-text">
                                <Html2React html={text} />
                            </Text>
                            }
                            {html &&
                            <Text color={textColor} textAlign="justify" className="page-text">
                                <Html2React html={html} />
                            </Text>
                            }
                            {buttonText &&
                            <Flex width="100%" justifyContent="flex-end" mt={4}>
                                <ChakraLink href={buttonLink}>
                                    <Button width="fit-content" borderWidth="2px">{buttonText}</Button>
                                </ChakraLink>
                            </Flex>
                            }
                        </Flex>

                    </SimpleGrid>

                </Flex>
            </Flex>
        }

        {imageSide === "right" &&
            <Flex direction="column" justifyContent="center" alignItems="center" bg={backgroundColor}>
                <Flex direction="row" justifyContent="center" alignItems="center" m={{base: 10, md: 20}} color="brand.100" height="fit-content" maxWidth="1200px">
                    <SimpleGrid columns={{base: 1, md: 2}} spacing={2} minHeight="fit-content" maxWidth="1200px">

                        {isSmallerThan768 &&
                            <Flex direction="column" justifyContent="center" width="100%" alignItems="flex-start">
                                <Image width="100%" src={image} borderRadius="30px" borderColor="brand.200" border={borderVal} />
                            </Flex>
                        }

                        <Flex direction="column" p={{base: 0, md: 10}} justifyContent="center" mt={{base: 5, md: 0}}>
                            {heading &&
                            <Heading size="lg" color={textColor} fontFamily={headingFont} fontWeight="500">{heading}</Heading>
                            }
                            {subheading &&
                            <Heading size="md" color={textColor} fontFamily={subheadingFont} fontWeight="500" mt={{base: 1, md: 2}}>{subheading}</Heading>
                            }
                            {text && !html &&
                            <Text color={textColor} textAlign="justify" className="page-text">
                                <Html2React html={text} />
                            </Text>
                            }
                            {html &&
                            <Text color={textColor} textAlign="justify" className="page-text">
                                <Html2React html={html} />
                            </Text>
                            }
                            {buttonText &&
                            <Flex width="100%" justifyContent="flex-end" mt={4}>
                                <ChakraLink href={buttonLink}>
                                    <Button width="fit-content" borderWidth="2px">{buttonText}</Button>
                                </ChakraLink>
                            </Flex>
                            }
                        </Flex>

                        {!isSmallerThan768 &&
                            <Flex direction="column" justifyContent="center" width="100%" alignItems="flex-start" backgroundImage={image} backgroundSize="cover" backgroundPosition="center" borderRadius="30px" borderColor="brand.200" border={borderVal}>
                            </Flex>
                        }

                    </SimpleGrid>

                </Flex>
            </Flex>
        }
        </>
      )
  }
  
  export default connect(TwoColumnPhotoTextSmall);
