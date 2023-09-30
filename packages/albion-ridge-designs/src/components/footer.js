import React from "react";
import {
  Text,
  Flex,
  Icon
} from '@chakra-ui/react';
import { FiMail, FiPhone } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook, FaDiscord } from 'react-icons/fa';
import Link from "@frontity/components/link";

function Footer({ footerData }) {
  const socialLinks = footerData.acf.social_links;
    return (
        <Flex direction="row" bg="brand.400" padding={5} justify="space-between">
            <Flex>
                <Text size="lg" fontWeight="600" color="brand.800" ml={4}>Albion Ridge Designs © 2023</Text>
            </Flex>
            <Flex direction="row">
            {socialLinks.map((link, key) => {
              return (
                  <Link link={link.social_media_account_link} key={key}>
                      {link.social_media_platform.toLowerCase() === "instagram" &&
                          <Icon as={FaInstagram} color="brand.800" boxSize={7} mr={4} _hover={{ color: "brand.500"}}></Icon>
                      }
                      {link.social_media_platform.toLowerCase() === "twitter" &&
                          <Icon as={FaTwitter} color="blackAlpha.800" boxSize={7} mr={4} _hover={{ color: "brand.500"}}></Icon>
                      }
                      {link.social_media_platform.toLowerCase() === "tiktok" &&
                          <Icon as={FaTiktok} color="blackAlpha.800" boxSize={7} mr={4} _hover={{ color: "brand.500"}}></Icon>
                      }
                      {link.social_media_platform.toLowerCase() === "facebook" &&
                          <Icon as={FaFacebook} color="blackAlpha.800" boxSize={7} mr={4} _hover={{ color: "brand.500"}}></Icon>
                      }
                      {link.social_media_platform.toLowerCase() === "discord" &&
                          <Icon as={FaDiscord} color="blackAlpha.800" boxSize={7} mr={4} _hover={{ color: "brand.500"}}></Icon>
                      }
                  </Link>
                )
              })
            }
            <a href={`mailto:${footerData.acf.email}`}><Icon as={FiMail} color="brand.800" boxSize={7} mr={4} _hover={{ color: "brand.500"}}></Icon></a>
            <a href={`tel:${footerData.acf.phone_number}`}><Icon as={FiPhone} color="brand.800" boxSize={7} mr={4} _hover={{ color: "brand.500"}}></Icon></a>
            </Flex>
      </Flex>
    )
  }

  export default Footer;
