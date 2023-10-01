import React from "react";
import { styled } from "frontity";
import {
    Button,
    Box,
    Heading,
    Flex,
    Image,
    useMediaQuery
  } from "@chakra-ui/react";
  import ardverticallogotransparent from "../../../assets/ardverticallogotransparent.png";

function Logo() {
    const [isSmallerThan480] = useMediaQuery('(max-width:480px)')

    return (
        <Flex direction="column" pr={5} justifyContent="center">
            {!isSmallerThan480 &&
                <LogoContainer>
                    <Heading size="2xl" color="brand.500" fontFamily="Amalta">Albion</Heading>
                    <Heading size="2xl" color="brand.500" fontFamily="Amalta">Ridge</Heading>
                    <Heading size="2xl" color="brand.500" fontFamily="Amalta">Designs</Heading>
                </LogoContainer>
            }
            {isSmallerThan480 &&
                <Image src={ardverticallogotransparent} />
            }
            <Box mt="0px">
                <a href="#application-section">
                    <Button variant="ctagreen" size="sm" fontWeight="600" letterSpacing="1px" mt={5}>Let's Work Together</Button>
                </a>
            </Box>
        </Flex>
    )
  }

export default Logo;

const LogoContainer = styled.div`
    color: #2C685D;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    padding: .5em;
`
