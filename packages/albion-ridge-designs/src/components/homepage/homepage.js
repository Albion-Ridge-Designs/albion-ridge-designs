
import React from "react"
import {
    Flex,
    Box,
    Text,
    Heading
  } from "@chakra-ui/react"
  import Parallax from "../parallax";
  import Contact from "../contact";
  import windowflowers from '../../assets/windowflowers.jpg';
  import albionhouse1 from '../../assets/albionhouse1.jpg';
  import albionhouse2 from '../../assets/albionhouse2.jpg';
  
  function Homepage() {
      return (
        <>
            <Parallax image={albionhouse1} text="Welcome to Albion Ridge Designs" includeText={true} height="600px" />
            <Flex direction="column" justifyContent="center" alignItems="center">
                <Box m={20} color="brand.100">
                    <Text pb={5} textAlign="justify">
                        Alexandre Edgar was born and raised in France but moved to America as a teenager. He made his way to California in 2020 and has recently settled on the beautiful Mendocino Coast with his wife and two cats. Outside of photography Alex enjoys playing guitar and meditation.
                    </Text>
                    <Text pb={5} textAlign="justify">
                        For him photography is a practice of being in the moment and cultivating greater attention. Photography and meditation work together in synergy to cultivate an attitude of playfulness and being open to what the moment itself is offering.
                    </Text>
                    <Text pb={5} textAlign="justify">
                        Alexandre is available to shoot headshots, outdoor portraits, and photos for real estate listings. If you are interested in a portrait shoot in Mendocino he can suggest locations for stunning photos.
                    </Text>
                </Box>
            </Flex>
            <Contact />
        </>
      )
  }
  
  export default Homepage;
