import React from "react";
import { connect } from "frontity";
import {
    Flex,
    Box,
    Heading,
    Text,
    Image
  } from '@chakra-ui/react';
import PageHero from "./page/pagehero";
import Cta from "./sections/cta";
import derphorse from "../assets/derphorse.png";

const Error = ({ state }) => {
  return (
    <>
        <PageHero 
          image={derphorse}
          heading="404 Not Found"
          subheading={`The path ${state.router.link} cannot be found.`}
          headingTextColor="brand.800"
          subheadingTextColor="brand.800"
        />
        <Cta />
    </>
  )
}

export default connect(Error);