import React, { useState, useEffect, useRef } from "react"
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
    Button
  } from '@chakra-ui/react';
import dayjs from "dayjs"
import Loading from "./loading";

const BlogCards = ({ state, libraries }) => {
  const blogItems = state.source.get("/blog");
  const blogData = state.source[blogItems.type];
  const blogValues = Object.values(blogData);
  const Html2React = libraries.html2react.Component;
  const blogCardsSection = useRef();

  const [lastThreePosts, setLastThreePosts] = useState([]);

  useEffect(() => {
    setLastThreePosts(blogValues.slice(-3).reverse());
  }, [])


  if (blogItems.isFetching) {
    return <Loading />
  }

  if (!blogItems.isFetching) {
    return (
    <Flex id="blogcards-section" ref={blogCardsSection} direction="column" alignItems="center" bg="brand.700" pt={20} pb={20}>
        <BlogHeading>
            <Heading size="xl" color="brand.800" mb={8} fontFamily="Amalta" with="100%" textAlign="center">The Albion Design Gazette</Heading>
        </BlogHeading>
        <Stack
        spacing={{
            base: '16',
            md: '24',
        }}
        pl={10}
        pr={10}
        >
            <SimpleGrid
                columns={{
                base: 1,
                md: 2,
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
                                            src={state.source.attachment[post.featured_media].source_url}
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
                                            <Text color="fg.muted"><Html2React html={post.excerpt.rendered} /></Text>
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
