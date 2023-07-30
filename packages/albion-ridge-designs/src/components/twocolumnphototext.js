
import React from "react"
import {
    Flex,
    Heading,
    Image,
    Text,
    SimpleGrid,
    Box
  } from "@chakra-ui/react"
  import { styled } from "frontity";
  
  function TwoColumnPhotoText({ image, text, imageLeft, color, bgColor, spacing }) {
      return (
        <>
        {imageLeft === true &&
            <SimpleGrid columns={{base: 1, sm: 2}} spacing={spacing} minHeight="600px">
                
                <Box
                    backgroundImage={image}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat" 
                >
                    <Image src={image} display={{base: "block", sm: "none", lg: "block"}} />
                </Box>
           
                    <Flex p={20} bg={bgColor} color="brand.100" alignItems="center" justifyContent="center">
                        <Text pb={5} color={color}>
                            {text}
                        </Text>
                    </Flex>
        
            </SimpleGrid>
        }

        {imageLeft === false &&
            <SimpleGrid columns={{base: 1, sm: 2}} spacing={spacing} minHeight="600px">
                <Flex p={20} bg={bgColor} color="brand.100" alignItems="center" justifyContent="center">
                    <Text pb={5} color={color}>
                        {text}
                    </Text>
                </Flex>
        
                <Box
                    backgroundImage={image}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat" 
                >
                    <Image src={image} display={{base: "block", sm: "none", lg: "block"}} />
                </Box>
           
            </SimpleGrid>
        }
        </>
      )
  }
  
  export default TwoColumnPhotoText;
