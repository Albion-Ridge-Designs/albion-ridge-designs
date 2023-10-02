import React, { useState, useEffect } from "react";
import { styled } from "frontity";
import useFontFaceObserver from 'use-font-face-observer';
import {
    Heading,
    HStack,
    Flex,
    Box,
    Button,
    useMediaQuery
  } from "@chakra-ui/react";
import TextTransition, { presets } from 'react-text-transition';
import useSticky from "../../hooks/useSticky";

function Hero({ image, video, headingAnimationList, headingTop, headingBottom, ctaButtonText, ctaButtonLink, highlight }) {
  const [index, setIndex] = useState(0);
  const { element } = useSticky();
  const [textsArr, setTextsArr] = useState([]);
  const [isSmallerThan420] = useMediaQuery('(max-width: 420px)');
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');
  const [isSmallerThan825] = useMediaQuery('(max-width: 825px)');
  const isFontLoaded = useFontFaceObserver([
    { family: 'Amalta' }, // Same name you have in your CSS
  ]);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  useEffect(() => {
    let arr = [];
    headingAnimationList.map((item) => {
      arr.push(item.heading_animation_text);
    })
    setTextsArr(arr);
  }, [isFontLoaded]);

  useEffect(() => {
  }, [textsArr])

  return (
    <>
    <style>
        {
          `#video {
            // position: fixed;
            z-index: 0;
            width: 100vw;
            height: 100vh;
            object-fit: cover;
            // filter:opacity(60%);
          }
            `
        }
      </style>
          <Flex direction="column" justifyContent="center" alignItems="center" textAlign="center" height="100vh" bgGradient='linear(to-l, brand.500, brand.900)'>
            <HeroContent>
                <div ref={element}>
                    {isFontLoaded &&
                        <Flex direction="column" height="100vh" justifyContent="center" alignItems="center">
                                    {!isSmallerThan420 &&
                                      <Box p={4}>
                                        <HeroHeading>
                                          <Heading color="brand.500" size="4xl" fontFamily="Amalta">Websites <Box as="span" color="brand.400">for</Box> <Box as="span" color="brand.900">Humans</Box>,</Heading>
                                          <Heading color="brand.500" size="4xl" fontFamily="Amalta"><Box as="span" color="brand.400">by</Box>  <Box as="span" color="brand.900">Humans</Box></Heading>
                                        </HeroHeading>
                                      </Box>
                                    }
                                    {isSmallerThan420 &&
                                      <Box p={4}>
                                        <Heading color="brand.800" fontFamily="Amalta" fontWeight="500" size="3xl">Websites <Box as="span" color="brand.400">for</Box> Humans, <Box as="span" color="brand.400">by</Box> Humans</Heading>
                                      </Box>
                                    }
                                
                                <a href={ctaButtonLink}>
                                  {!isSmallerThan420 &&
                                    <Button variant="cta" size="lg" fontWeight="600" letterSpacing="1px" mt={5}>{ctaButtonText}</Button>
                                  }
                                  {isSmallerThan420 &&
                                    <Button variant="cta" size="md" fontWeight="600" fontFamily="Graphik" letterSpacing="1px" mt={1}>{ctaButtonText}</Button>
                                  }
                                </a>
                        </Flex>
                    }
                </div>
            </HeroContent>
        </Flex>
    </>
  );
}

export default Hero;

const Welcome = styled.section`
    background-color: #1f1f1f;
    background-attachment: fixed;
    background-size: cover;
    background-position: bottom;
    line-height: 1.8;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
`
const HeroHeading = styled.div`
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    padding: .5em;
`

const HeroHeadingMobile = styled.div`
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: black;
    padding: .5em;
`

const HeroContent = styled.div`
    /* z-index: 1; */
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
`
