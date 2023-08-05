
import React from "react"
import {
    Flex,
    Heading
  } from "@chakra-ui/react"
  import { styled } from "frontity";
  
  function Parallax({ image, text, includeText, height, position }) {
      return (
        <Hero style={{backgroundImage: `url("${image}")`, backgroundPosition: position }}>
            <Flex
                height={height}
                width="100%"
                justifyContent="center"
                alignItems="center"
            >
                {includeText &&
                    <Heading color="brand.800">{text}</Heading>
                }
            </Flex>
        
        </Hero>
      )
  }
  
  export default Parallax;

  const Hero = styled.div`
    background-size: cover;
    min-height: 600px;
    background-attachment: fixed;
    background-repeat: no-repeat;
    position: relative;
    z-index: 0;

    &:before {
        background: rgba(0, 0, 0, 0.3);
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
    }
  `
