import React, { useState } from 'react';
import { 
    Image, 
    AspectRatio, 
    Box, 
    Stack, 
    Text, 
    Flex, 
    Link as ChakraLink,
    useMediaQuery
} from "@chakra-ui/react";

const Square = ({ image, caption, link }) => {
    const [isSmallerThan610] = useMediaQuery('(max-width: 610px)')
    const [isSmallerThan995] = useMediaQuery('(max-width: 995px)')
    const [isLargerThan1210] = useMediaQuery('(min-width: 1210px)')
    const [showCaption, setShowCaption] = useState(false);
    function getWordStr(str) {
        return str.split(/\s+/).slice(0, 5).join(" ");
    }
    const cutCaption = getWordStr(caption);
    return (
        <Stack 
            spacing="8"       
            onMouseEnter={() => setShowCaption(true)}
            onMouseOut={() => setShowCaption(false)}
        >

            {!showCaption &&
            <Box overflow="hidden">
                <ChakraLink href={link} style={{ textDecoration: "none" }} isExternal>
                    <AspectRatio ratio={4/5}>
                        <Image
                        src={image}
                        alt={caption}
                        width="full"
                        height="15rem"
                        objectFit="cover"
                        />
                    </AspectRatio>
                </ChakraLink>
            </Box>
            }

            {showCaption &&
            <Flex direction="column" alignItems="center" justifyContent="center" bg="brand.400" color="brand.800" height="100%" p={10}>
                <Box overflow="hidden">
                <ChakraLink href={link} color="brand.500" style={{ textDecoration: "none" }} isExternal onMouseEnter={() => setShowCaption(true)}>
                    <Text fontSize="xl" color="brand.500" fontFamily="GraphikSemibold" textAlign="center">{caption}</Text>
                </ChakraLink>
                </Box>
            </Flex>
            }
        </Stack>
    );
}

export default Square;
