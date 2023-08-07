
import React from "react"
import { styled } from "frontity";
import {
    Flex,
    Box,
    Text,
    Heading,
    background
  } from "@chakra-ui/react"
  import Parallax from "../parallax";
  import Contact from "../contact";
  import TwoColumnPhotoText from "../twocolumnphototext";
  import windowflowers from '../../assets/windowflowers.jpg';
  import albionhouse1 from '../../assets/albionhouse1.jpg';
  import albionhouse2 from '../../assets/albionhouse2.jpg';
  import guitarcarpet1600 from '../../assets/guitarcarpet1600.jpg';
  import mendotrees from '../../assets/mendotrees.jpg';
  import mailbox from '../../assets/mailbox.jpg';
  
  function Homepage() {
      return (
        <>
            <Parallax image={mendotrees} text="" includeText={true} height="600px" position="bottom" />
            <Flex direction="column" justifyContent="center" alignItems="center">
                <Box m={20} color="brand.100">
                    <Text pb={5} textAlign="justify">
                        Inexpedient depths against love suicide burying. Revaluation free fearful sea passion evil inexpedient salvation society intentions disgust noble intentions.
                    </Text>
                    <Text pb={5} textAlign="justify">
                        Convictions abstract mountains joy victorious hatred abstract selfish derive deceptions evil fearful. Victorious ultimate mountains intentions war aversion evil eternal-return disgust contradict.
                    </Text>
                    <Text pb={5} textAlign="justify">
                        Contradict deceptions moral free good war intentions derive zarathustra merciful ultimate. Virtues evil inexpedient law prejudice sexuality hope snare morality faith ocean intentions. Marvelous suicide value decrepit law deceptions. Battle mountains oneself salvation salvation insofar noble madness insofar superiority war. Noble contradict play justice abstract revaluation. War transvaluation horror enlightenment ascetic eternal-return grandeur convictions fearful strong derive.
                    </Text>
                </Box>
            </Flex>
            <TwoColumnPhotoText 
                image={guitarcarpet1600} 
                text={"Alexandre Edgar was born and raised in France but moved to America as a teenager. He made his way to California in 2020 and has recently settled on the beautiful Mendocino Coast with his wife and two cats. Outside of photography Alex enjoys playing guitar and meditation."}
                imageLeft={true} 
                bgColor="brand.800"
                color="brand.100"
                spacing={0}
            />
            <TwoColumnPhotoText 
                image={mailbox} 
                text={"Alexandre Edgar was born and raised in France but moved to America as a teenager. He made his way to California in 2020 and has recently settled on the beautiful Mendocino Coast with his wife and two cats. Outside of photography Alex enjoys playing guitar and meditation."}
                imageLeft={false} 
                bgColor="brand.300"
                color="brand.700"
                spacing={0}
            />
            <Contact />
        </>
      )
  }
  
  export default Homepage;

  const Storybook = styled.p`
  &:first-letter {
      /* initial-letter: 2; */
    font-family: Amalta;

    -webkit-initial-letter: 4 5;
    initial-letter: 4 5;
    background: lightyellow;
    border: 10px solid #000;
    color: orange;
    font-weight: bold;
    margin-right: 1em;
    padding: 2em;

    /* -webkit-initial-letter: 4;
    initial-letter: 4;
    color: orange;
    font-weight: bold;
    margin-right: .75em; */

    /* -webkit-initial-letter: 4 1;
    initial-letter: 4 1;
    color: orange;
    font-weight: bold;
    margin-right: .75em; */
  }
`