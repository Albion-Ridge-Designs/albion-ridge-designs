import React from "react";
import {
    Text,
    Flex
  } from "@chakra-ui/react";
import Link from "@frontity/components/link";

function NavLinks({ navigationLinks }) {

    return (
        <Flex direction="column" alignItems="flex-start">
            {navigationLinks.map((link, key) => {
                return (
                    <Link link={link.navigation_link.url} key={key}>
                        <Text fontSize={{base: "sm", sm: "md", md: "lg"}} fontWeight="600" color="brand.800" _hover={{color: "brand.500"}} mb={2}>
                            {link.navigation_link.title}
                        </Text>
                    </Link>
                    )
                })
            }
        </Flex>
    )
  }

export default NavLinks;
