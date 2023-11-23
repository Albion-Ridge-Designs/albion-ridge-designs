import React, { useState, useEffect } from "react";
import { styled } from "frontity";
import useFontFaceObserver from 'use-font-face-observer';
import {
    Heading,
    Flex,
    Box,
    Button,
    useMediaQuery
  } from "@chakra-ui/react";
import useSticky from "../../hooks/useSticky";

function Hero({ imageBackground, imageBackgroundMobile, gradientColors, gradientDirection, heroTopText, heroBottomText, highlightColors, mainColor, ctaButtonText, heroTextMobile, highlightColorsMobile, mainColorMobile, ctaButtonLink }) {
  const [index, setIndex] = useState(0);
  const { element } = useSticky();
  const [isSmallerThan420] = useMediaQuery('(max-width: 420px)');
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');
  const [isSmallerThan825] = useMediaQuery('(max-width: 825px)');
  const [topLineArr, setTopLineArr] = useState(heroTopText.split(" "))
  const [bottomLineArr, setBottomLineArr] = useState(heroBottomText.split(" "));
  const [mobileArr, setMobileArr] = useState(heroTextMobile.split(" "));
  const [highlightWords, setHighlightWords] = useState([]);
  const [highlightDict, setHighlightDict] = useState({});
  const [highlightWordsMobile, setHighlightWordsMobile] = useState([]);
  const [highlightDictMobile, setHighlightDictMobile] = useState({});
  const [gradient, setGradient] = useState('');

  const gradientDict = {
    "to top": "to-t",
    "to top right": "to-tr",
    "to right": "to-r",
    "to bottom right": "to-br",
    "to bottom": "to-b", 
    "to bottom left": "to-bl",
    "to left": "to-l",
    "to top left": "to-tl"
  }

  const isFontLoaded = useFontFaceObserver([
    { family: 'Amalta' }, // Same name you have in your CSS
  ]);

  useEffect(() => {

  }, [isFontLoaded]);

  useEffect(() => {
    const gDirection = `${gradientDict[gradientDirection]}`;
    const gradientColorsNum = gradientColors.length;
    let finalGradientString;
    if (gradientColorsNum === 2) {
      finalGradientString = `linear(${gradientDict[gradientDirection]}, ${gradientColors[0].gradient_color}, ${gradientColors[1].gradient_color})`;
      setGradient(finalGradientString);
    }
    if (gradientColorsNum === 3) {
      finalGradientString = `linear(${gradientDict[gradientDirection]}, ${gradientColors[0].gradient_color}, ${gradientColors[1].gradient_color}, ${gradientColors[2].gradient_color})`;
      setGradient(finalGradientString);
    }

    let hWords = [];
    let hObj = {};
    highlightColors.map((pair) => {
      hWords.push(pair.word)
      hObj[pair.word] = pair.color;
    })

    let hWordsMobile = [];
    let hObjMobile = {};
    highlightColorsMobile.map((pair) => {
      hWordsMobile.push(pair.word);
      hObjMobile[pair.word] = pair.color;
    })

    setHighlightWords(hWords);
    setHighlightDict(hObj);
    setHighlightWordsMobile(hWordsMobile);
    setHighlightDictMobile(hObjMobile);
  }, [])

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
            
          #text-box {
              z-index: 10;
          }
            `
        }
      </style>
        {!imageBackground &&
        <Flex direction="column" justifyContent="center" alignItems="center" textAlign="center" height="100vh" bgGradient={gradient}>
          <HeroContent>
              <div ref={element}>
                  {isFontLoaded &&
                      <Flex direction="column" height="100vh" justifyContent="center" alignItems="center">
                        {!isSmallerThan420 &&
                          <Box p={4}>
                            <HeroHeading>
                              <Heading color={mainColor} size="4xl" fontFamily="Amalta">
                                {topLineArr.map((word, idx) => {
                                  if (highlightWords.includes(word)) {
                                    if (![".", ",", "!", "?"].includes(topLineArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={highlightDict[word]}>{word} </Box>
                                      )
                                    }
                                    if ([".", ",", "!", "?"].includes(topLineArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={highlightDict[word]}>{word}</Box>
                                      )
                                    }
                                  }
                                  if (!highlightWords.includes(word)) {
                                    if (![".", ",", "!", "?"].includes(topLineArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={mainColor}>{word} </Box>
                                      )
                                    }
                                    if ([".", ",", "!", "?"].includes(topLineArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={mainColor}>{word}</Box>
                                      )
                                    }
                                  }
                                })
                                }
                              </Heading>

                              <Heading color={mainColor} size="4xl" fontFamily="Amalta">
                                {bottomLineArr.map((word, idx) => {
                                  if (highlightWords.includes(word)) {
                                    if (![".", ",", "!", "?"].includes(topLineArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={highlightDict[word]}>{word} </Box>
                                      )
                                    }
                                    if ([".", ",", "!", "?"].includes(topLineArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={highlightDict[word]}>{word}</Box>
                                      )
                                    }
                                  }
                                  if (!highlightWords.includes(word)) {
                                    if (![".", ",", "!", "?"].includes(topLineArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={mainColor}>{word} </Box>
                                      )
                                    }
                                    if ([".", ",", "!", "?"].includes(topLineArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={mainColor}>{word}</Box>
                                      )
                                    }
                                  }
                                })
                                }
                              </Heading>
                            </HeroHeading>
                          </Box>
                        }
                        {isSmallerThan420 &&
                          <Box p={4}>
                            <Heading color="brand.800" fontFamily="Amalta" fontWeight="500" size="3xl">
                              {mobileArr.map((word, idx) => {
                                  if (highlightWordsMobile.includes(word)) {
                                    if (![".", ",", "!", "?"].includes(mobileArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={highlightDictMobile[word]} key={idx}>{word} </Box>
                                      )
                                    }
                                    if ([".", ",", "!", "?"].includes(mobileArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={highlightDictMobile[word]} key={idx}>{word}</Box>
                                      )
                                    }
                                  }
                                  if (!highlightWordsMobile.includes(word)) {
                                    if (![".", ",", "!", "?"].includes(mobileArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={mainColorMobile} key={idx}>{word} </Box>
                                      )
                                    }
                                    if ([".", ",", "!", "?"].includes(mobileArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={mainColorMobile} key={idx}>{word}</Box>
                                      )
                                    }
                                  }
                                })
                              }
                            </Heading>
                          </Box>
                        }
                              
                        <a href={ctaButtonLink}>
                          {!isSmallerThan420 &&
                            <Button variant="cta" size="lg" fontWeight="600" letterSpacing="1px" mt={5}>{ctaButtonText}</Button>
                          }
                          {isSmallerThan420 &&
                            <Button variant="ctamobile" size="md" fontWeight="600" fontFamily="Graphik" letterSpacing="1px" mt={1}>{ctaButtonText}</Button>
                          }
                        </a>
                      </Flex>
                  }
              </div>
          </HeroContent>
      </Flex>
      }
      {imageBackground &&
          <Flex direction="column" justifyContent="center" alignItems="center" textAlign="center" height="100vh" backgroundImage={{base: `url("${imageBackground}")`, md: `url("${imageBackground}")`}} backgroundAttachment={{ base: "scroll", md: "fixed"}} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition={{base: "bottom", md: "center"}}>
          <HeroContent>
              <div ref={element}>
                  {isFontLoaded &&
                      <Flex direction="column" height="60vh" justifyContent="center">
                        
                        {!isSmallerThan420 &&
                          <Box p={4} id="text-box">
                            <HeroHeading>
                              <Heading color={mainColor} size="4xl" fontFamily="Amalta">
                                {topLineArr.map((word, idx) => {
                                  if (highlightWords.includes(word)) {
                                    if (![".", ",", "!", "?"].includes(topLineArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={highlightDict[word]} key={idx}>{word} </Box>
                                      )
                                    }
                                    if ([".", ",", "!", "?"].includes(topLineArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={highlightDict[word]} key={idx}>{word}</Box>
                                      )
                                    }
                                  }
                                  if (!highlightWords.includes(word)) {
                                    if (![".", ",", "!", "?"].includes(topLineArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={mainColor} key={idx}>{word} </Box>
                                      )
                                    }
                                    if ([".", ",", "!", "?"].includes(topLineArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={mainColor} key={idx}>{word}</Box>
                                      )
                                    }
                                  }
                                })
                                }
                              </Heading>

                              <Heading color={mainColor} size="4xl" fontFamily="Amalta">
                                {bottomLineArr.map((word, idx) => {
                                  if (highlightWords.includes(word)) {
                                    if (![".", ",", "!", "?"].includes(topLineArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={highlightDict[word]}>{word} </Box>
                                      )
                                    }
                                    if ([".", ",", "!", "?"].includes(topLineArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={highlightDict[word]}>{word}</Box>
                                      )
                                    }
                                  }
                                  if (!highlightWords.includes(word)) {
                                    if (![".", ",", "!", "?"].includes(topLineArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={mainColor}>{word} </Box>
                                      )
                                    }
                                    if ([".", ",", "!", "?"].includes(topLineArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={mainColor}>{word}</Box>
                                      )
                                    }
                                  }
                                })
                                }
                              </Heading>
                            </HeroHeading>
                          </Box>
                        }
                        {isSmallerThan420 &&
                          <Box p={4} id="text-box">
                            <Heading color="brand.800" fontFamily="Amalta" fontWeight="500" size="3xl">
                              {mobileArr.map((word, idx) => {
                                  if (highlightWordsMobile.includes(word)) {
                                    if (![".", ",", "!", "?"].includes(mobileArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={highlightDictMobile[word]}>{word} </Box>
                                      )
                                    }
                                    if ([".", ",", "!", "?"].includes(mobileArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={highlightDictMobile[word]}>{word}</Box>
                                      )
                                    }
                                  }
                                  if (!highlightWordsMobile.includes(word)) {
                                    if (![".", ",", "!", "?"].includes(mobileArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={mainColorMobile}>{word} </Box>
                                      )
                                    }
                                    if ([".", ",", "!", "?"].includes(mobileArr[idx + 1])) {
                                      return (
                                        <Box as="span" color={mainColorMobile}>{word}</Box>
                                      )
                                    }
                                  }
                                })
                              }
                            </Heading>
                          </Box>
                        }
                              
                        <a href={ctaButtonLink}>
                          {!isSmallerThan420 &&
                            <Button variant="cta" size="lg" fontWeight="600" letterSpacing="1px">{ctaButtonText}</Button>
                          }
                          {isSmallerThan420 &&
                            <Button variant="ctamobile" size="md" fontWeight="600" fontFamily="Graphik" letterSpacing="1px" mt={1}>{ctaButtonText}</Button>
                          }
                        </a>
                      </Flex>
                  }
              </div>
          </HeroContent>
      </Flex>
      }
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
    &:before {
        background: rgba(0, 0, 0, 0.15);
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 0;
    }
`
