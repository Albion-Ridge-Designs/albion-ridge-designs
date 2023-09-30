import React, { useState, useEffect, useRef } from 'react';
import { connect } from "frontity";
import axios from 'axios'
import FeedNav from './feednav';
import { 
    SimpleGrid, 
    Box,
    Link as ChakraLink
} from '@chakra-ui/react';

const InstagramNav = ({state, ...props}) => {
    const options = state.source.get("acf-options-page");
    const token = options.acf.instagram_access_token;
    const [feeds, setFeedsData] = useState([])
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,username,permalink,thumbnail_url&limit=${props.limit}&access_token=${token}`)
                .then((resp) => {
                    // console.log("resp", resp);
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }
        
        // manually call the fecth function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        <Box bg="transparent">
            <div className="container">
                {/* <Box width="fit-content">
                    <ChakraLink href="https://instagram.com/albionridgedesigns" style={{ textDecoration: "none" }} _hover={{ color: "brand.400"}} isExternal>
                        <Text size="sm" fontWeight="600" letterSpacing="1px" p={2}>@albionridgedesigns</Text>
                    </ChakraLink>
                </Box> */}
                <SimpleGrid
                    columns={{
                        base: 3,
                        md: 3
                        }}
                    rowGap={{
                    base: '1',
                    // md: '12',
                    }}
                    columnGap="1"
                    bg="transparent"
                >
                    {feeds.map((feed) => (
                        <FeedNav key={feed.id} feed={feed} />
                    ))}
                </SimpleGrid>
            </div>
        </Box>
    );
}

export default connect(InstagramNav);
