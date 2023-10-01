import React, { useState, useEffect } from "react";
import { styled } from "frontity";
import useFontFaceObserver from 'use-font-face-observer';
import {
    Heading,
    HStack,
    Flex,
    Button,
    useMediaQuery
  } from "@chakra-ui/react";
import TextTransition, { presets } from 'react-text-transition';
import useSticky from "../../hooks/useSticky";

function Hero({ image, video, headingAnimationList, headingTop, headingBottom, ctaButtonText, ctaButtonLink }) {
  const [index, setIndex] = useState(0);
  const { element } = useSticky();
  const [textsArr, setTextsArr] = useState([]);
  const [isSmallerThan420] = useMediaQuery('(max-width: 420px)')
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

      <Welcome>
        <video autoPlay loop muted id="video">
          <source src={video} type="video/mp4" />
        </video>
        
        <HeroContent>
        <div ref={element}>
          {isFontLoaded && textsArr.length > 0 &&
            <Flex direction="column" height="100vh" justifyContent="center" alignItems="center">

                <Flex direction="column" justifyContent="center" alignItems="center" border="5px solid black" borderRadius="30px" bg="brand.900" opacity="80%" pt={5} pb={5} minWidth={{base: "275px", sm: "475px", md: "500px"}}>
          
                    <HStack>
                      {!isSmallerThan420 &&
                      <HeroHeading>
                        <Heading color="brand.800" size="3xl" fontFamily="Amalta">{headingTop} </Heading>
                        <Heading color="brand.500" size="3xl" fontFamily="Amalta" p={5} textAlign="center">
                          <TextTransition
                            text={ textsArr[index % textsArr.length] }
                            springConfig={presets.wobbly} // default, gentle, wobbly, stiff, slow, molasses
                            style={{width: "100%", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center"}}
                          />
                        </Heading>
                        <Heading color="brand.800" size="3xl" fontFamily="Amalta"> {headingBottom} </Heading>
                      </HeroHeading>
                      }
                      {isSmallerThan420 &&
                      <HeroHeadingMobile>
                        <Heading color="brand.800" size="2xl" fontFamily="Amalta">{headingTop} </Heading>
                        <Heading color="brand.500" size="2xl" fontFamily="Amalta" p={2} textAlign="center">
                          <TextTransition
                            text={ textsArr[index % textsArr.length] }
                            springConfig={presets.wobbly} // default, gentle, wobbly, stiff, slow, molasses
                            style={{width: "100%", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center"}}
                          />
                        </Heading>
                        <Heading color="brand.800" size="2xl" fontFamily="Amalta"> {headingBottom} </Heading>
                      </HeroHeadingMobile>
                      }
                    </HStack>
          
                </Flex>

                <a href={ctaButtonLink}>
                  <Button variant="cta" size="lg" fontWeight="600" letterSpacing="1px" mt={5}>{ctaButtonText}</Button>
                </a>

            </Flex>
          }
          </div>
        </HeroContent>
      </Welcome>
    </>
  );
}

export default Hero

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
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    padding: .25em;
`

const HeroSubheading = styled.span`
    -webkit-text-stroke-width: 1px;
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
