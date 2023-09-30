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

const FeedNav = (props) => {
    const [isSmallerThan610] = useMediaQuery('(max-width: 610px)')
    const [isSmallerThan995] = useMediaQuery('(max-width: 995px)')
    const [isLargerThan1210] = useMediaQuery('(min-width: 1210px)')
    const { id, caption, media_type, media_url, permalink, thumbnail_url } = props.feed;
    let post;

    switch (media_type) {
        case "VIDEO":
            post = (
                <AspectRatio ratio={1/1}>  
                {/* <video
                    width='100%'
                    height='1rem' 
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
                height="1rem"
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
                height="1rem"
                objectFit="cover"
                />
                </AspectRatio>
            );
    }       

    return (
        <Box overflow="hidden">
            <ChakraLink href={permalink} style={{ textDecoration: "none" }} isExternal>
            <React.Fragment>
                {post}
            </React.Fragment>
            </ChakraLink>
        </Box>
    );
}

export default FeedNav;
