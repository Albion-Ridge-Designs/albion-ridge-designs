import React from "react";
import {
    Text,
    Flex,
    Icon
  } from "@chakra-ui/react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook, FaDiscord } from 'react-icons/fa';
import Link from "@frontity/components/link";
import InstagramNav from "../../instagram/instagramnav";

function SocLinks({ menuData, socialLinks }) {

    return (
        <Flex direction="column" justifyContent="center" height="100%" width={{base: "100%", md: "35%"}} pl={5} mt={{base: 6, sm: 2, md: 0}}>

            <Flex width="100%" justifyContent="flex-end" mb={1}>
                <Text fontWeight="600" size="sm" color="brand.800">
                    @albionridgedesigns
                </Text>
            </Flex>

            <InstagramNav limit={6} />
            
            <Flex width="100%" flexDirection="row" justifyContent="flex-end" mt={1}>
                {socialLinks.map((link, idx) => {
                    return (
                        <Link link={link.social_media_account_link} key={idx}>
                            {link.social_media_platform.toLowerCase() === "instagram" &&
                                <Icon as={FaInstagram} color="brand.800" boxSize={5} mr={3}_hover={{ color: "brand.500"}}></Icon>
                            }
                            {link.social_media_platform.toLowerCase() === "twitter" &&
                                <Icon as={FaTwitter} color="brand.800" boxSize={5} mr={3} _hover={{ color: "brand.500"}}></Icon>
                            }
                            {link.social_media_platform.toLowerCase() === "tiktok" &&
                                <Icon as={FaTiktok} color="brand.800" boxSize={5} mr={3} _hover={{ color: "brand.500"}}></Icon>
                            }
                            {link.social_media_platform.toLowerCase() === "facebook" &&
                                <Icon as={FaFacebook} color="brand.800" boxSize={5} mr={3} _hover={{ color: "brand.500"}}></Icon>
                            }
                            {link.social_media_platform.toLowerCase() === "discord" &&
                                <Icon as={FaDiscord} color="brand.800" boxSize={5} mr={3} _hover={{ color: "brand.500"}}></Icon>
                            }
                        </Link>
                        )
                    })
                }
                <a href={`mailto:${menuData.acf.email}`}><Icon as={FiMail} color="brand.800" boxSize={5} mr={3} _hover={{ color: "brand.500"}}></Icon></a>
                <a href={`tel:${menuData.acf.phone_number}`}><Icon as={FiPhone} color="brand.800" boxSize={5} mr={3} _hover={{ color: "brand.500"}}></Icon></a>
            </Flex>

        </Flex>        
    )
  }

export default SocLinks;
