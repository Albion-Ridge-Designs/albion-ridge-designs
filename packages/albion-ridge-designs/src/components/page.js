import React from "react"
import { connect } from "frontity"
import {
  Button,
  Heading,
  Text,
  Flex
} from '@chakra-ui/react';
import Contact from "./contact"
import Loading from "./loading";

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const author = state.source.author[post.author]
  const Html2React = libraries.html2react.Component

  if (data.isFetching) {
    return <Loading />
  }

  if (!data.isFetching) {
    return (
      <Flex direction="column" bg="brand.200">
        <Flex 
          direction="column"
          width="100%" 
          height="100%"
          minHeight="85vh"
          pl={{base: 5, lg: 20}}
          pr={{base: 5, lg: 20}}
          mt={5}
          mb={5}
        >
          <Heading size="2xl" mt={10} mb={10} pl="10px" color="blackAlpha.800">
            <Html2React html={post.title.rendered} />
          </Heading>
          {/* <p>
            <strong>Posted: </strong>
            {post.date}
          </p>
          <p>
            <strong>Author: </strong>
            {author.name}
          </p> */}
          <Text fontWeight={500} mb={8} fontSize="xl" color="blackAlpha.800" className="page-text">
            <Html2React html={post.content.rendered} />
          </Text>
        </Flex>
        <Flex direction="column" align="center" bg="black">
          <Contact />
        </Flex>
      </Flex>
    )
  }
}

export default connect(Post)
