import React from "react"
import { connect } from "frontity"
import dayjs from "dayjs"
import {
  Heading,
  Text,
  Flex,
  HStack
} from '@chakra-ui/react';
import Loading from "./loading";

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const author = state.source.author[post.author]
  const Html2React = libraries.html2react.Component

  const formattedDate = dayjs(post.date).format("MMMM DD, YYYY")
  const renderedPost = post.content.rendered;

  function getAttrFromString(str, node, attr) {
    var regex = new RegExp('<' + node + ' .*?' + attr + '="(.*?)"', "gi"), result, res = [];
    let currentId = 0;
    while ((result = regex.exec(str))) {
        res.push({id: `${currentId}`, src: result[1], aspectRatio: 4 / 3, objectFit: "contain !important", alt: "Alexandre Edgar Photography"});
        currentId += 1;
    }
    return res;
}

const imageArr = getAttrFromString(renderedPost, 'img', 'src');
console.log(imageArr);

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
          padding={{base: 5, lg: 20}}
          bg="brand.200"
        >
        <Heading size="xl" mt={5} mb={5} color="brand.100">
          <Html2React html={post.title.rendered} />
        </Heading>
          <HStack mb={2}>
            <Text size="lg" fontWeight="600" color="blackAlpha.800">
              Posted: 
            </Text>
            <Text size="lg" color="blackAlpha.800">
              {formattedDate}
            </Text>
          </HStack>
          <HStack mb={5}>
            <Text size="lg" fontWeight="600" color="blackAlpha.800">
              Author:
            </Text>
            <Text size="lg" color="blackAlpha.800">
              {author.name}
            </Text>
          </HStack>
          <Flex direction="column">
            {state.source.attachment[post.featured_media] &&
              <Image src={state.source.attachment[post.featured_media].source_url} />
            }
            <Text fontWeight={500} mb={8} fontSize="lg" color="blackAlpha.800" className="blogPost">
              <Html2React html={post.content.rendered} />
            </Text>
          </Flex>
        </Flex>
      </Flex>
    )
  }
}

export default connect(Post)

{/* <Flex 
direction="column"
padding={{base: 5, lg: 20}}
bg="brand.200"
>
<Heading size="2xl" mt={10} mb={5} color="brand.100">
<Html2React html={post.title.rendered} />
</Heading>
<HStack mb={2}>
  <Text size="lg" fontWeight="600" color="blackAlpha.800">
    Posted: 
  </Text>
  <Text size="lg" color="blackAlpha.800">
    {formattedDate}
  </Text>
</HStack>
<HStack mb={5}>
  <Text size="lg" fontWeight="600" color="blackAlpha.800">
    Author:
  </Text>
  <Text size="lg" color="blackAlpha.800">
    {author.name}
  </Text>
</HStack>
</Flex>
<BlogCarousel images={imageArr} /> */}