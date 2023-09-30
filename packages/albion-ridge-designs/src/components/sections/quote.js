import React from "react"
import {
    Flex,
    Box,
    Heading,
    Text
  } from "@chakra-ui/react"
  
  function Quote({ backgroundColor, text, author, showAuthor, textColor, useDropCap, dropCapBackgroundColor, dropCapTextColor}) {
      return (
        <>
        <style>
        {
          `#dropcap {
            &:first-letter {
                font-family: Amalta;
                -webkit-initial-letter: 2 4;
                initial-letter: 2 4;
                background: ${dropCapBackgroundColor};
                color: ${dropCapTextColor};
                border: 5px solid #000;
                font-weight: bold;
                margin-left: .25em;
                margin-right: .5em;
                padding: .5em;
          }
            `
        }
      </style>
        <Box height="fit-content" bg={backgroundColor}>
            <Flex
                height="100%"
                width="100%"
                justifyContent="center"
                alignItems="center"
                direction="column"
                // maxWidth="1200px"
            >
                <Flex direction="column" p={20}>
                    {!useDropCap &&
                        <>
                            <Heading size="2xl" mb={3} color={textColor} fontFamily="Amalta" fontWeight="500" textAlign="center">"{text}"</Heading>
                            <Flex width="100%" justifyContent="flex-end">
                                {showAuthor &&
                                    <Text fontSize="2xl" color={textColor} fontFamily="GraphikSemibold" mr={10}>
                                        - {author}
                                    </Text>
                                }
                            </Flex>
                        </>
                    }
                    {useDropCap &&
                        <>
                            <Box>
                                <Heading id="dropcap" size="2xl" mb={3} color={textColor} fontFamily="Amalta" fontWeight="500">"{text}"</Heading>
                            </Box>
                            <Flex width="100%" justifyContent="flex-end">
                                {showAuthor &&
                                    <Text fontSize="2xl" color={textColor} fontFamily="GraphikSemibold" mr={10}>
                                        - {author}
                                    </Text>
                                }
                            </Flex>
                        </>
                    }
                </Flex>
            </Flex>
        </Box>
        </>
      )
  }
  
  export default Quote;
