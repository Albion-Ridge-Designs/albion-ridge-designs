import React from "react"
import { Spinner, Flex } from "@chakra-ui/react";

const Loading = () => {
    return (
        <Flex 
            direction="column"
            width="100%" 
            height="100%"
            minHeight="85vh"
            padding={{base: 5, lg: 20}}
            bg="brand.200"
            justifyContent="center"
            alignItems="center"
        >
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
    </Flex>
    )
}

export default Loading;
