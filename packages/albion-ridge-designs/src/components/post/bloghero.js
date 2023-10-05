import React from "react";
import { styled, connect } from "frontity";
import {
    Heading,
    Text,
    Flex
  } from "@chakra-ui/react";

function BlogHero({ libraries, element, image, title, date }) {
  const Html2React = libraries.html2react.Component;
  return (
    <>
      <Welcome style={{ backgroundImage: `url("${image}")` }}>
        <Flex direction="column" m={10} ref={element}>
          <HeroHeading>
            <Heading color="brand.400" size="4xl" fontFamily="Amalta" textAlign="center"><Html2React html={title} /></Heading>
          </HeroHeading>
            <Text color="white" fontSize="xl" fontFamily="GraphikSemibold">{date}</Text>
        </Flex>
      </Welcome>
    </>
  );
}

export default connect(BlogHero);

const Welcome = styled.section`
    background-color: #1f1f1f;
    background-attachment: fixed;
    background-size: cover;
    line-height: 1.8;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
z-index: 0;
    z-index: 0;
    &:before {
        background: rgba(0, 0, 0, 0.25);
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
    }
}
`
const HeroHeading = styled.div`
    color: #2C685D;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    padding: 2em;
`
