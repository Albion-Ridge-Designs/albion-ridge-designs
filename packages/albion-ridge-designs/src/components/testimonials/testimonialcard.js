import React from "react";
import { Box, Flex, Img, Text, useColorModeValue as mode } from '@chakra-ui/react';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

function TestimonialCard(props) {
  const { logo, children, image, author, role, colorScheme: c } = props;
  const accentColor = c;

  return (
    <Flex
      direction="column"
      rounded={{
        md: 'lg',
      }}
      bg={mode('white', 'gray.700')}
      shadow="lg"
    >
      <Flex
        direction="column"
        position="relative"
        mb="4"
        textAlign="center"
        justify="center"
        align="center"
        pt="10"
        pb="6"
        px="10"
      >

        <Box as="blockquote" maxW="340px" mx="auto" my="4">
          <Box
            position="absolute"
            top="6"
            left="5"
            display={{
              base: 'none',
              md: 'inline',
            }}
            fontSize="3xl"
            color={accentColor}
            opacity={0.2}
          >
            <ImQuotesLeft />
          </Box>
          <Text fontSize={{base: "md", md: "lg"}}>{children}</Text>
          <Box
            position="absolute"
            bottom="-2"
            right="5"
            display={{
              base: 'none',
              md: 'inline',
            }}
            fontSize="3xl"
            color={accentColor}
            opacity={0.2}
          >
            <ImQuotesRight />
          </Box>
        </Box>
      </Flex>
      <Flex
        direction="column"
        position="relative"
        align="center"
        justify="center"
        color="white"
        px="6"
        pb="8"
      >
        <Box
          position="absolute"
          left="0"
          bottom="0"
          w="full"
          h="full"
          roundedBottom={{
            md: 'lg',
          }}
          overflow="hidden"
          _before={{
            content: `''`,
            display: 'block',
            position: 'absolute',
            bottom: '0',
            left: '-10%',
            width: '120%',
            height: '90%',
            roundedTop: '120%',
            bg: accentColor,
          }}
        />
        <Img
          src={image}
          alt={author}
          rounded="full"
          border="6px solid"
          borderColor={accentColor}
          position="relative"
          mt="-5"
          w="16"
          h="16"
          objectFit="cover"
        />
        <Box position="relative" fontSize="sm" mt="3" textAlign="center" color="brand.800">
          <Text as="h3" fontSize="md" fontFamily="Amalta">
            {author}
          </Text>
          <Text>{role}</Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export default TestimonialCard;
