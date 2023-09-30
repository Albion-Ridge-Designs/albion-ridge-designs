import { Spinner, Flex } from "@chakra-ui/react";
import React from "react"

const Loading = () => {
    return (
        <Flex 
        direction="column"
        width="100%" 
        height="100%"
        minHeight="85vh"
        padding={{base: 5, lg: 20}}
        bg="brand.700"
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

export default Loading
