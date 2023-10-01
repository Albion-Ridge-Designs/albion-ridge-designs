import React from "react";
import {
    Box,
    Flex,
    useMediaQuery
  } from "@chakra-ui/react";
import Logo from "./navparts/logo";
import SecLinks from "./navparts/seclinks";
import NavLinks from "./navparts/navlinks";
import SocLinks from "./navparts/soclinks";

function NavBody({ menuData, sectionLinks, navigationLinks, socialLinks }) {
    const [isSmallerThan480] = useMediaQuery('(max-width:480px)')

    return (
        <Flex direction={{ base: "column", md: "row"}} width="100%" justifyContent="center">
            <Flex direction="row">
                <Logo />

                <Flex direction="row" alignItems="center" justifyContent="center" width="5px">
                    <Box height="75%" width="100%" borderRight="2px solid" borderColor="brand.800" />
                </Flex>
       
                <Flex direction="column" pl={5} pr={5} height="100%" justifyContent="center">
                    <SecLinks sectionLinks={sectionLinks} />
                    <NavLinks navigationLinks={navigationLinks} />
                </Flex>
     
            </Flex>
          
            <SocLinks menuData={menuData} socialLinks={socialLinks} />
        </Flex>
        
    )
  }

export default NavBody;

