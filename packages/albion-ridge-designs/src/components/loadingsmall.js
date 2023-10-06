import { Spinner, Flex } from "@chakra-ui/react";
import React from "react"

const LoadingSmall = ({ background }) => {
    return (
      <Flex 
        direction="column"
        width="100%" 
        height="30px"
        padding={{base: 5, lg: 10}}
        bg={background}
        justifyContent="center"
        alignItems="center"
      >
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='brand.400'
          size='xl'
        />
    </Flex>
    )
}

export default LoadingSmall;
