import React, { useState, useEffect } from "react";
import { connect } from "frontity"
import Link from "@frontity/components/link";
import { 
    Box, 
    Flex,
    Image,
    Heading,
    Button,
    useMediaQuery
 } from "@chakra-ui/react";
 import LoadingSmall from "../loadingsmall";

const Cta = ({ state, backgroundColor, textColor, headingText, image, buttonText, buttonLink }) => {
    const options = state.source.get("acf-options-page");
    const siteDomain = options.acf.site_domain;
    const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');
    const [bgColor, setBgColor] = useState(backgroundColor);
    const [color, setColor] = useState(textColor);
    const [heading, setHeading] = useState(headingText);
    const [i, setI] = useState(image);
    const [ctaButtonText, setCtaButtonText] = useState(buttonText);
    const [ctaButtonLink, setCtaButtonLink] = useState(buttonLink);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!backgroundColor) {
            setBgColor(options.acf.promo_section_background_color)
        }
        if (!textColor) {
            setColor(options.acf.promo_section_text_color)
        }
        if (!headingText) {
            setHeading(options.acf.promo_section_default_heading)
        }
        if (!image) {
            setI(options.acf.promo_section_default_image)
        }
        if (!buttonText) {
            setCtaButtonText(options.acf.cta_button_text);
        }
        if (!buttonLink) {
            setCtaButtonLink(options.acf.cta_button_link)
        }
        setLoading(false);
    }, [])

    if (loading) {
        return (
            <LoadingSmall background={bgColor} />
        )
    }

    if (!loading) {
        return (
            <Box height="fit-content" bg={bgColor}>
                <Flex
                    direction={{base: "column", md: "row"}}
                    height="100%"
                    width="100%"
                    justifyContent="center"
                    alignItems="center"
                    p={{base: 10, md: 20}}
                >
                    {isSmallerThan768 &&
                        <Flex direction="column" alignItems="center" justifyContent="center" pl={4}>
                            <Image src={i} borderRadius="150px" border="4px solid #333333" m={10} />
                        </Flex>
                    }
                    <Flex direction="column" alignItems={{base: "center", md: "flex-start"}}>
                        <Heading size="2xl" mb={3} color={color} fontFamily="Amalta" fontWeight="500" textAlign={{base: "center", md: "inherit"}}>
                            {heading}
                        </Heading>
                        
                        <Box width="fit-content" mt={6}>
                        <Link link={ctaButtonLink}>
                            <Button variant="cta" size="lg" fontWeight="600" letterSpacing="1px">{ctaButtonText}</Button>
                        </Link>
                        </Box>
                    </Flex>
                {!isSmallerThan768 &&
                <Flex direction="column" alignItems="center" justifyContent="center" pl={4}>
                    <Image src={i} borderRadius="150px" border="4px solid #333333" m={10} />
                </Flex>
                }
                </Flex>
            </Box>
        )
    }
}

export default connect(Cta);
