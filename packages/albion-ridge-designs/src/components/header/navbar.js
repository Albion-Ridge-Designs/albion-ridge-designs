import React, { useState, useEffect } from "react";
import { styled, connect } from "frontity";
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Heading,
    Flex,
    Icon,
    Image,
    useDisclosure,
    useMediaQuery
  } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import Link from "@frontity/components/link";
import useFontFaceObserver from 'use-font-face-observer';
import NavBody from "./navbody";
import ardhorizontallogotransparent from "../../assets/ardhorizontallogotransparent.png";

function Navbar({ state, sticky, menuItems, menuData, siteDomain, siteName }) {
    const options = state.source.get("acf-options-page");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const data = state.source.get(state.router.link);
    const [navigationLinks, setNavigationLinks] = useState([]);
    const [sectionLinks, setSectionLinks] = useState([]);
    const [socialLinks, setSocialLinks] = useState([]);
    const [isHomepage, setIsHomepage] = useState(true);
    const [isSmallerThan480] = useMediaQuery('(max-width:480px)')
    const [isSmallerThan375] = useMediaQuery('(max-width:375px)')

    useEffect(() => {
        const navLinks = menuData.acf.navigation_links;
        const secLinks = menuData.acf.section_links;
        const socLinks = menuData.acf.social_links;    
        navLinks.map((link) => {
            link.navigation_link.url = link.navigation_link.url.replace("http://wordpress.albionridgedesigns.com", `${siteDomain}` )
        })
        setNavigationLinks(navLinks);
        setSectionLinks(secLinks);
        setSocialLinks(socLinks);
    }, [menuData, data])

    useEffect(() => {
        if (data.route === "/") {
            setIsHomepage(true);
        }
        if (data.route !== "/") {
            setIsHomepage(false);
        }
    }, [data])

    const isFontLoaded = useFontFaceObserver([
        { family: 'Amalta' }, // Same name you have in your CSS
      ]);
    
      useEffect(() => {
      }, [isFontLoaded]);

    if (!sticky) {
    return (
        <>
        <Navigation>
            <Flex>
                {isFontLoaded &&
                <Link link="/">
                    {!isSmallerThan480 &&
                        <Logo>
                            <Heading size="2xl" color="brand.500" fontFamily="Amalta">{siteName}</Heading>
                        </Logo>
                    }
                    {isSmallerThan480 &&
                        <Image src={ardhorizontallogotransparent} />
                    }
                </Link>
                }
            </Flex>
            <Flex direction="row">
                <Button ref={btnRef} ml={3} mr={3} bg="transparent" color="brand.500" _hover={{border: "0px", borderColor: "brand.500", backgroundColor: "brand.500"}} onClick={onOpen}>
                    <Icon as={FiMenu} color="brand.400" _hover={{color: "brand.900"}} boxSize={7} />
                </Button>

                <Drawer
                    isOpen={isOpen}
                    placement='top'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    >
                <DrawerOverlay />
                <DrawerContent bg="brand.400" color="brand.800">
                    <DrawerHeader>
                    <DrawerCloseButton />
                    </DrawerHeader>

                    <DrawerBody style={{overflowY: "scroll"}}>
                        <NavBody menuData={menuData} sectionLinks={sectionLinks} navigationLinks={navigationLinks} socialLinks={socialLinks} isHomepage={isHomepage} siteDomain={siteDomain} />
                    </DrawerBody>
                </DrawerContent>
                </Drawer>
            </Flex>
        </Navigation>
    </>
    )
  }

  if (sticky) {
    return (
    <>
        <style>
        {
          `#navigation-sticky {
            background: ${options.acf.brand_900}
          }
        `
        }
      </style>
        <NavigationSticky id="navigation-sticky">
            <Flex direction="column">
                <Link link="/">
                        {!isSmallerThan480 &&
                            <Logo>
                                <Heading size="2xl" color="brand.500" fontFamily="Amalta">{siteName}</Heading>
                            </Logo>
                        }
                        {isSmallerThan480 &&
    
                            <Image src={ardhorizontallogotransparent} />
                        }
                </Link>
            </Flex>
            <Flex direction="row">
            <Button ref={btnRef} ml={3} mr={3} bg="transparent" _hover={{border: "0px", borderColor: "brand.500", backgroundColor: "brand.500"}} onClick={onOpen}>
                    <Icon as={FiMenu} color="brand.500" _hover={{color: "brand.900"}} boxSize={7} />
                </Button>

                <Drawer
                    isOpen={isOpen}
                    placement='top'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    >
                <DrawerOverlay />
                <DrawerContent bg="brand.400" color="brand.800">
                    <DrawerHeader>
                    <DrawerCloseButton />
                    </DrawerHeader>

                    <DrawerBody style={{overflowY: "scroll"}}>
                        <NavBody menuData={menuData} sectionLinks={sectionLinks} navigationLinks={navigationLinks} socialLinks={socialLinks} />
                    </DrawerBody>
                </DrawerContent>
                </Drawer>
            </Flex>
        </NavigationSticky>
    </>
    )
  }
}
export default connect(Navbar);

const Navigation = styled.div`
    display: flex;
    direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    position: absolute;
    z-index: 1;
    width: 100%;
}
`
const NavigationSticky = styled.div`
    display: flex;
    direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    position: absolute;
    z-index: 1;
    width: 100%;
    /* background: #91B7C7; */
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 2px solid #333333;
    box-shadow: 1px 1px 1px #222;
    animation: moveDown 0.5s ease-in-out;

    @keyframes moveDown {
    from {
      transform: translateY(-5rem);
    }
    to {
      transform: translateY(0rem);
    }
  }
}
`

const Logo = styled.div`
    color: #2C685D;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    padding-top: .5em;
    padding-left: .5em;
    padding-right: .5em;
`
const LogoMobile = styled.div`
    color: #2C685D;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    padding-top: .5em;
    padding-left: .5em;
    padding-right: .5em;
`
