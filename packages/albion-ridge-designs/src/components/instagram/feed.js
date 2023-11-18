import React, { useState, useEffect } from 'react';
import { 
    Image, 
    AspectRatio, 
    Box,  
    Text, 
    Flex, 
    Link as ChakraLink,
    useMediaQuery
} from "@chakra-ui/react";
import FeedItem from './feeditem';

const Feed = (props) => {
    const [isSmallerThan610] = useMediaQuery('(max-width: 610px)')
    const [isSmallerThan995] = useMediaQuery('(max-width: 995px)')
    const [isLargerThan1210] = useMediaQuery('(min-width: 1210px)')
    const { id, caption, media_type, media_url, permalink, thumbnail_url } = props.feed;
    let post;
    const [showCaption, setShowCaption] = useState(false);
    function getWordStr(str) {
        return str.split(/\s+/).slice(0, 5).join(" ");
    }
    const cutCaption = getWordStr(caption);

    switch (media_type) {
        case "VIDEO":
            post = (
                <AspectRatio ratio={1/1}>  
                {/* <video
                    width='100%'
                    height='auto' 
                    src={media_url} 
                    type="video/mp4" 
                    controls playsinline>
                </video> */}
                <Image
                    src={thumbnail_url}
                    alt={caption}
                    width="full"
                    height="1rem"
                    objectFit="cover"
                />
                </AspectRatio>
            )
            break;
        case "CAROUSEL_ALBUM":
            post = (
                <AspectRatio ratio={1/1}>
                <Image
                src={media_url}
                alt={caption}
                width="full"
                height="15rem"
                objectFit="cover"
                />
                </AspectRatio>
            );
            break;
        default:
            post = (
                <AspectRatio ratio={1/1}>
                <Image
                src={media_url}
                alt={caption}
                width="full"
                height="15rem"
                objectFit="cover"
                />
                </AspectRatio>
            );
    }       

    return (
        <Box  
            onMouseEnter={() => setShowCaption(true)}
            onMouseOut={() => setShowCaption(false)}
        >
            <FeedItem showCaption={showCaption} cutCaption={cutCaption} post={post} permalink={permalink} />

            {!showCaption &&
            <Box overflow="hidden">
                <ChakraLink href={permalink} style={{ textDecoration: "none" }} isExternal>
                <React.Fragment>
                    {post}
                </React.Fragment>
                </ChakraLink>
            </Box>
            }

            {showCaption &&
            <Flex direction="column" alignItems="center" justifyContent="center" bg="brand.400" color="brand.800" height="100%" p={10} overflow="hidden">
                <Box overflow="hidden">
                <ChakraLink href={permalink} color="brand.500" style={{ textDecoration: "none" }} isExternal onMouseEnter={() => setShowCaption(true)}>
                    {!isSmallerThan610 && (isSmallerThan995 || isLargerThan1210) &&
                        <Text fontSize="md" color="brand.500" fontFamily="GraphikSemibold" textAlign="center">{cutCaption}...</Text>
                    }
                    <Text fontSize="xl" color="brand.500" mt={5} fontFamily="Amalta" textAlign="center">View Post</Text>
                </ChakraLink>
                </Box>
            </Flex>
            }
        </Box>
    );
}

export default Feed;
