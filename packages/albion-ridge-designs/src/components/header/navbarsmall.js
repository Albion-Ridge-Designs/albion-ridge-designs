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

function NavbarSmall({ sticky, menuItems, menuData, siteDomain, siteName }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const [navigationLinks, setNavigationLinks] = useState([]);
    const [sectionLinks, setSectionLinks] = useState([]);
    const [socialLinks, setSocialLinks] = useState([]);
    const [isSmallerThan480] = useMediaQuery('(max-width:480px)')
    const [isSmallerThan420] = useMediaQuery('(max-width:420px)')
    const [isSmallerThan375] = useMediaQuery('(max-width:375px)')
    const [ws, setWs] = useState(false)

    useEffect(() => {
        const navLinks = menuData.acf.navigation_links;
        const secLinks = menuData.acf.section_links;
        const socLinks = menuData.acf.social_links;    
        navLinks.map((link) => {
            link.navigation_link.url = link.navigation_link.url.replace("http://wptemplates.albionridgedesigns.com", `${siteDomain}` )
        })
        setNavigationLinks(navLinks);
        setSectionLinks(secLinks);
        setSocialLinks(socLinks);
    }, [menuData])

    const isFontLoaded = useFontFaceObserver([
        { family: 'Amalta' }, // Same name you have in your CSS
      ]);
    
      useEffect(() => {
      }, [isFontLoaded]);


    return (
        <Navigation>
            <Flex>
                {isFontLoaded &&
                <Link link="/">
                    {!isSmallerThan480 && !isSmallerThan375 &&
                        <Logo>
                            <Heading size="2xl" color="brand.500" fontFamily="Amalta">{siteName}</Heading>
                        </Logo>
                    }
                    {isSmallerThan480 && !isSmallerThan375 &&
                        <LogoMobile>
                            <Heading color="brand.500" fontFamily="Amalta" style={{fontSize: "24px"}}>{siteName}</Heading>
                        </LogoMobile>
                    }
                    {isSmallerThan480 && isSmallerThan375 &&
                        <LogoMobile>
                            <Heading color="brand.500" fontFamily="Amalta" style={{fontSize: "20px"}}>{siteName}</Heading>
                        </LogoMobile>
                    }
                </Link>
                }
            </Flex>
            <Flex direction="row">
                <Button ref={btnRef} ml={3} mr={3} bg="transparent" color="brand.500" _hover={{border: "0px", borderColor: "brand.500", backgroundColor: "brand.500"}} onClick={onOpen}>
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
        </Navigation>
    )

}
export default connect(NavbarSmall);

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
    background: #91B7C7;
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

const NavigationStickyXs = styled.div`
    /* display: flex;
    direction: row;
    align-items: center;
    justify-content: flex-end; */
    padding: 1rem;
    /* position: absolute; */
    z-index: 1;
    width: 100%;
    background: #91B7C7;
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
