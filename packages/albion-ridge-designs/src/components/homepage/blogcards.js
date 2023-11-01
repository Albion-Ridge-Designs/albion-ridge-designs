import React, { useState, useEffect } from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import {
    Box,
    Heading,
    Image,
    Link as ChakraLink,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Button,
    useMediaQuery
  } from '@chakra-ui/react';
import dayjs from "dayjs"
import axios from "axios";
import LoadingSmall from "../loadingsmall";

const BlogCards = ({ state, libraries }) => {
//   const blogItems = state.source.get("/blog");
//   const blogData = state.source[blogItems.type];
//   const blogValues = Object.values(blogData);
  const Html2React = libraries.html2react.Component;
  const [loading, setLoading] = useState(true);
  const [isSmallerThan420] = useMediaQuery('(max-width: 420px)');
  const [lastThreePosts, setLastThreePosts] = useState([]);
  const [featuredImages, setFeaturedImages] = useState({});

  useEffect(async () => {
    async function fetchPosts () {
      let allPosts;
      try{
        axios
            .get("https://wptemplates.albionridgedesigns.com/wp-json/wp/v2/posts")
            .then((resp) => {
                console.log("resp", resp);
                allPosts = resp.data;
                setLastThreePosts(allPosts.slice(-3).reverse());
            })
      } catch (err) {
          console.log('error', err)
      }
    }
    
    // manually call the fecth function 
    await fetchPosts();
}, [])

useEffect(() => {
    let imageStorage = {};
    async function fetchImage(id, url) {
        try{
          axios
              .get(url)
              .then((resp) => {
                  console.log("resp", resp);
                  imageStorage[id] = resp.data.source_url;
                  console.log("imageStorage", imageStorage);
                  if (Object.keys(imageStorage).length === 3) {
                    setFeaturedImages(imageStorage);
                    setLoading(false);
                  }
              })
        } catch (err) {
            console.log('error', err)
        }
      }

    lastThreePosts.map(async (post) => {
        await fetchImage(post.id, `https://wptemplates.albionridgedesigns.com/wp-json/wp/v2/media/${post.featured_media}`);
    })
    console.log("lastThreePosts", lastThreePosts);
}, [lastThreePosts])

useEffect(() => {
    console.log("featuredImages", featuredImages)
}, [featuredImages])

  if (loading) {
    return (
        <LoadingSmall background="brand.700" />
    )
  }

  if (!loading) {
    return (
    <Flex id="blogcards-section" direction="column" alignItems="center" bg="brand.700" pt={20} pb={20}>
        <Stack
        spacing={10}
        pl={10}
        pr={10}
        >
        {!isSmallerThan420 &&
        <BlogHeading>
            <Heading size="xl" color="brand.800" fontFamily="Amalta" with="100%" textAlign="center">The Albion Design Gazette</Heading>
        </BlogHeading>
        }
        {isSmallerThan420 &&
            <Heading size="xl" color="brand.800" fontWeight="500" fontFamily="Amalta" with="100%" textAlign="center">The Albion Design Gazette</Heading>
        }
            <SimpleGrid
                columns={{
                base: 1,
                lg: 3,
                }}
                rowGap={{
                base: '8',
                md: '12',
                }}
                columnGap="6"
                bg="brand.700"
            >
                {lastThreePosts.map((post) => {
                    console.log("featured", featuredImages)
                    let formattedDate = dayjs(post.date).format("MMMM DD, YYYY")
                    return (
                        <ChakraLink
                            key={post.id}
                            _hover={{
                            textDecor: 'none',
                            }}
                            role="group"
                            bg="brand.800"
                            borderRadius="30px"
                            border="2px solid black"
                            boxShadow="lg"
                            _groupHover={{
                                boxShadow: 'xl',
                            }}
                            href={post.link}
                        >
                            <Box
                            p="6"
                            bg="bg.surface"
                            transition="all 0.2s"
                            height="full"
                            >
                                <Stack
                                    spacing={{
                                    base: '8',
                                    lg: '16',
                                    }}
                                    justify="space-between"
                                    height="full"
                                >
                                    <Stack spacing="8">
                                        <Box overflow="hidden">
                                            <Image
                                            src={featuredImages[post.id]}
                                            alt={post.title.rendered}
                                            width="full"
                                            height="15rem"
                                            objectFit="cover"
                                            />
                                        </Box>
                                        <Stack spacing="3">
                                            <Text fontSize="sm" fontWeight="semibold" color="accent">
                                            {formattedDate}
                                            </Text>
                                            <Heading size="md"><Html2React html={post.title.rendered} /></Heading>
                                            <Text color="fg.muted" fontWeight="500"><Html2React html={post.excerpt.rendered} /></Text>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Box>
                        </ChakraLink>
                )
                }
                )}
            </SimpleGrid>
        </Stack>
        <Link link="/blog" mt={12}>
            <Button size="sm" bg="brand.800" mt={12}>
                View All Posts
            </Button>
        </Link>
    </Flex>
    )
  }
}

export default connect(BlogCards);

const BlogHeading = styled.span`
    color: #2C685D;
    -webkit-text-stroke-width: .5px;
    -webkit-text-stroke-color: black;
    padding: .5em;
`