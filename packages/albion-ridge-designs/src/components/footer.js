import React from "react";
import {
  Text,
  Flex,
  Icon
} from '@chakra-ui/react';
import { FiMail, FiPhone } from "react-icons/fi";
import { FaInstagram } from 'react-icons/fa';
import Link from "@frontity/components/link";

function Footer() {
    return (
        <Flex direction="row" bg="brand.600" padding={5} justify="space-between">
            <Flex>
                <Text size="lg" color="brand.200">Albion Ridge Designs © 2023</Text>
            </Flex>
            <Flex direction="row">
              <a href="mailto:alexandrewedgar@gmail.com"><Icon as={FiMail} color="brand.200" boxSize={7} mr={3}></Icon></a>
              <Link link="https://instagram.com/alexandrewedgar"><Icon as={FaInstagram} color="brand.200" boxSize={7} mr={3}></Icon></Link>
              <a href="tel:669-437-0406"><Icon as={FiPhone} color="brand.200" boxSize={7} mr={3}></Icon></a>
            </Flex>
      </Flex>
    )
  }

  export default Footer;
