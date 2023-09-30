import React from "react";
import {
    Text,
    Flex
  } from "@chakra-ui/react";

function SecLinks({ sectionLinks }) {
    return (
        <Flex direction="column" alignItems="flex-start">
            {sectionLinks.map((link, idx) => {
                return (
                    <a href={`#${link.section_id}`} key={idx}>
                        <Text fontSize={{base: "md", md: "lg"}} fontWeight="600" color="brand.800" _hover={{color: "brand.500"}} mb={2}>
                            {link.section_title}
                        </Text>
                    </a>
                    )
                })
            }
        </Flex>
    )
  }

export default SecLinks;
