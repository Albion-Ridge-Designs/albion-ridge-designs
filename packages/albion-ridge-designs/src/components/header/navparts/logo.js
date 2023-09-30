import React from "react";
import { styled } from "frontity";
import {
    Button,
    Box,
    Heading,
    Flex,
    useMediaQuery
  } from "@chakra-ui/react";

function Logo() {
    const [isSmallerThan480] = useMediaQuery('(max-width:480px)')

    return (
        <Flex direction="column" pr={5} justifyContent="center">
            <LogoContainer>
                <Heading size="2xl" color="brand.500" fontFamily="Amalta">Albion</Heading>
                <Heading size="2xl" color="brand.500" fontFamily="Amalta">Ridge</Heading>
                <Heading size="2xl" color="brand.500" fontFamily="Amalta">Designs</Heading>
            </LogoContainer>
            <Box mt="0px">
                <a href="#application-section">
                    <Button variant="ctagreen" size="sm" fontWeight="600" letterSpacing="1px" mt={5}>Let's Work Together</Button>
                </a>
            </Box>
        </Flex>
    )
  }

export default Logo;

const LogoContainer = styled.span`
    color: #2C685D;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    padding: .5em;
`
