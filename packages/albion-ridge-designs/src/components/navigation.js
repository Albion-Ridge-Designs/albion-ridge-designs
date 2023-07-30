import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  Text,
  Flex,
  Icon,
  useDisclosure
} from '@chakra-ui/react';
import { FiMenu, FiMail, FiPhone } from "react-icons/fi";
import { FaInstagram } from 'react-icons/fa';
import Link from "@frontity/components/link";

function Navigation() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  
    return (
        <Flex direction="row" bg="brand.600" padding={5} justify="space-between">
            <Flex>
                <Link link="/">
                    <Heading size="lg" color="brand.700">Albion Ridge Designs</Heading>
                </Link>
            </Flex>

            <Flex direction="row">

                <Button ref={btnRef} ml={3} mr={3} bg="brand.700" onClick={onOpen}>
                    <Icon as={FiMenu} color="brand.800" boxSize={7} />
                </Button>

                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    >
                <DrawerOverlay />
                <DrawerContent bg="brand.300" color="blackAlpha.800">
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Link link="/">
                            <Heading size="lg"></Heading>
                        </Link>
                    </DrawerHeader>

                    <DrawerBody style={{overflowY: "scroll"}}>
                        <Flex direction="column">
                            <Link link="/"><Text fontSize="xl" mb={2}>Home</Text></Link>
                            <Link link="/about-alexandre"><Text fontSize="xl" mb={2}>About Alexandre</Text></Link>
                            <Link link="https://alexandreedgar.com/booking/portraits/"><Text fontSize="xl" mb={2}>Book a Photoshoot</Text></Link>
                            <Link link="https://alexandreedgar.com/gallery/portfolio/"><Text fontSize="xl" mb={2}>Gallery</Text></Link>
                            <Link link="/blog"><Text fontSize="xl" mb={2}>Blog</Text></Link>
                        </Flex>
                    </DrawerBody>

                    <DrawerFooter>
                        <Flex direction="row">
                            <a href="mailto:alexandrewedgar@gmail.com"><Icon as={FiMail} color="blackAlpha.800" boxSize={7} mr={3}></Icon></a>
                            <Link link="https://instagram.com/alexandrewedgar"><Icon as={FaInstagram} color="blackAlpha.800" boxSize={7} mr={3}></Icon></Link>
                            <a href="tel:669-437-0406"><Icon as={FiPhone} color="blackAlpha.800" boxSize={7} mr={3}></Icon></a>
                        </Flex>
                    </DrawerFooter>
                </DrawerContent>
                </Drawer>
            </Flex>
      </Flex>
    )
  }

  export default Navigation;
  