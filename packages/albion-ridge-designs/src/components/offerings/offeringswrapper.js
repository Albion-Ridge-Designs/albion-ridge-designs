import React, { useState, useRef } from "react";
import { connect, styled } from "frontity";
import {
    Box,
    Heading,
    Link as ChakraLink,
    SimpleGrid,
    Stack,
    HStack,
    Text,
    Flex,
    Button,
    List,
    ListItem,
    ListIcon,
    Icon,
    useMediaQuery
  } from '@chakra-ui/react';
  import { FaCheck, FaArrowLeft } from "react-icons/fa";
import ApplicationForm from "../application/applicationform";
import ardgradient20 from "../../assets/ardgradient20.jpeg";
import ardgradient14 from "../../assets/ardgradient14.jpeg";
import ardgradient19 from "../../assets/ardgradient19.jpeg";
import Offerings from "./offerings";

const OfferingsWrapper = ({ state, libraries }) => {
  const [offerChoice, setOfferChoice] = useState(false)
  const Html2React = libraries.html2react.Component;
  const offeringItems = state.source.get("/offering/main");
  const offeringData = state.source[offeringItems.type][offeringItems.id];
  console.log("offeringData", offeringData);
  const displaySection = offeringData.acf.display_section;
  const offeringsArr = offeringData.acf.offerings;
  const displayMarquee = offeringData.acf.display_marquee_promo;
  const marqueeArr = offeringData.acf.promo_marquee_text;
  const offersSection = useRef();
  const [isSmallerThan480] = useMediaQuery('(max-width:480px)')
  
 
  if (displaySection === true) {
    return (
        <>
            {!isSmallerThan480 &&
                <OffersContainer id="offers-section" ref={offersSection} style={{ backgroundImage: `url("${ardgradient14}")` }}>
                    <Offerings offeringsArr={offeringsArr} displayMarquee={displayMarquee} marqueeArr={marqueeArr} />
                </OffersContainer>
            }
            {isSmallerThan480 &&
            <Box id="offers-section" ref={offersSection} bg="brand.300">
                <Offerings offeringsArr={offeringsArr} displayMarquee={displayMarquee} marqueeArr={marqueeArr} />
            </Box>
            }
        </>
    )
    }
    
    if (displaySection === false) {
        return (
            <></>
        )
    }
}

export default connect(OfferingsWrapper);

const OffersContainer = styled.section`
    background-color: #1f1f1f;
    background-attachment: fixed;
    background-size: cover;
    background-position: bottom;
}
`
