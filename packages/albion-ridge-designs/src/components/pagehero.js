import React, { useEffect } from "react";
import { styled, connect } from "frontity";
import useFontFaceObserver from 'use-font-face-observer';
import {
    Heading,
    Text,
    Flex
  } from "@chakra-ui/react";
import useSticky from "../hooks/useSticky";
import Loading from "./loading";

function PageHero({ state, image, heading, subheading, headingTextColor, subheadingTextColor }) {
  const data = state.source.get(state.router.link)
  const { element } = useSticky();
  const isFontLoaded = useFontFaceObserver([
    { family: 'Amalta' }, // Same name you have in your CSS
  ]);


  useEffect(() => {
  }, [isFontLoaded]);

  if (data.route === "/") {
    return (
        <>
        </>
    )
  }

  if (data.isFetching || !isFontLoaded) {
    return (
        <Loading />
    )
  }

    if (!data.isFetching && isFontLoaded && data.route !== "/") {
        return (
            <Welcome style={{ backgroundImage: `url("${image}")` }}>
                <HeroContent>
                    <div ref={element}>
                        {isFontLoaded &&
                            <Flex direction="column" height="100vh" justifyContent="center" alignItems="center">
                                {heading &&
                                    <HeroHeading>
                                        <Heading color={headingTextColor} size="3xl" fontFamily="Amalta">{heading}</Heading>
                                    </HeroHeading>
                                }

                                {subheading &&
                                    <HeroSubheading>
                                        <Text color={subheadingTextColor} fontSize="2xl" fontFamily="GraphikBlack" letterSpacing="-.5px">{subheading}</Text> 
                                    </HeroSubheading>
                                }
                            </Flex>
                        }
                    </div>
                </HeroContent>
            </Welcome>
        );
    }
}

export default connect(PageHero);

const Welcome = styled.section`
    background-color: #1f1f1f;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    line-height: 1.8;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
`
const HeroHeading = styled.span`
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    padding: .5em;
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
