import React from "react";
import {
    Text,
    Flex
  } from "@chakra-ui/react";

function SecLinks({ sectionLinks, isHomepage, siteDomain }) {
    return (
        <Flex direction="column" alignItems="flex-start">
            {sectionLinks.map((link, idx) => {
                return (
                    <>
                        {isHomepage &&
                            <a href={`#${link.section_id}`} key={idx}>
                                <Text fontSize={{base: "sm", sm: "md", md: "lg"}} fontWeight="600" color="brand.800" _hover={{color: "brand.500"}} mb={2}>
                                    {link.section_title}
                                </Text>
                            </a>
                        }
                        {!isHomepage &&
                            <a href={`${siteDomain}/#${link.section_id}`} key={idx}>
                                <Text fontSize={{base: "sm", sm: "md", md: "lg"}} fontWeight="600" color="brand.800" _hover={{color: "brand.500"}} mb={2}>
                                    {link.section_title}
                                </Text>
                            </a>
                        }
                    </>
                    )
                })
            }
        </Flex>
    )
  }

export default SecLinks;
