import React, { useState, useEffect } from 'react';
import { 
    Box, 
    Link as ChakraLink,
    useMediaQuery
} from "@chakra-ui/react";

const FeedItem = (showCaption, cutCaption, post, id, caption, media_type, media_url, permalink  ) => {
    const [isSmallerThan610] = useMediaQuery('(max-width: 610px)')
    const [isSmallerThan995] = useMediaQuery('(max-width: 995px)')
    const [isLargerThan1210] = useMediaQuery('(min-width: 1210px)')

    return (
            <Box>
                <ChakraLink href={permalink} style={{ textDecoration: "none" }} isExternal>
                <React.Fragment>
                    {post}
                </React.Fragment>
                </ChakraLink>
            </Box>

    );
}

export default FeedItem;
