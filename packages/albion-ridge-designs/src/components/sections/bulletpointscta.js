import React, { useState, useEffect } from "react"
import { connect } from "frontity";
import {
    Flex,
    Box,
    Heading,
    Divider,
    Button,
    List,
    ListItem,
    ListIcon
  } from "@chakra-ui/react";
  import { FaRegSadTear, FaRegSmile, FaCheck } from "react-icons/fa";
  import Loading from "../loading";
  
  function BulletPointsCta({ state, backgroundColor, textColor, iconColor, headingText, icon, includeCta, bulletPoints }) {
    const options = state.source.get("acf-options-page");
    const ctaButtonLink = options.acf.cta_button_link;
    const ctaButtonText = options.acf.cta_button_text;
    const [listIcon, setListIcon] = useState(false);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (bulletPoints) {
            setLoading(false);
        }
    }, [bulletPoints])

    if (loading) {
        return (
            <Loading />
        )
    }

    if (!loading) {
      return (
        <>
          <Flex id="introduction-section" direction="column" justifyContent="center" alignItems="center" color={textColor} bg={backgroundColor}>
            <Box m={{base: 10, md: 20}} maxWidth="1200px">
              <Flex direction="column" justifyContent="center" alignItems="center">
                <Heading textAlign="center" fontFamily={{base: "GraphikSemibold", md: "Produkt"}} pb={5}>
                    {headingText}
                </Heading>
                <Divider mb={5} orientation='horizontal' width="30px" border="2px solid #1D1A05" borderColor="#1D1A05" />
                <List spacing={5}>
                    {bulletPoints.map((item, idx) => {
                        return (
                            <ListItem key={idx}>
                                {icon === "sad" &&
                                    <ListIcon as={FaRegSadTear} width="1.25em" height="1.25em" color={iconColor} />
                                }
                                {icon === "happy" &&
                                    <ListIcon as={FaRegSmile} width="1.25em" height="1.25em" color={iconColor} />
                                }
                                {icon === "checkbox" &&
                                    <ListIcon as={FaCheck} width="1.25em" height="1.25em" color={iconColor} />
                                }
                                {item.list_item}
                            </ListItem>
                        )
                        })
                    }
                </List>
                {includeCta &&
                    <a href={ctaButtonLink}>
                        <Button variant="cta" size="lg" fontWeight="600" letterSpacing="1px" mt={10}>{ctaButtonText}</Button>
                    </a>
                }
              </Flex>
            </Box>
          </Flex>
        </>
      )
    }
  }
  
  export default connect(BulletPointsCta);
