import React from "react";
import { Container, Flex, Box } from '@chakra-ui/react'

export const Step = (props) => {
  const { isActive, ...boxProps } = props
  return (
    <Box
      flex="1"
      h="2"
      bg={isActive ? 'brand.200' : 'brand.700'}
      borderRadius="base"
      transition="background 0.2s"
      {...boxProps}
    />
  )
}
