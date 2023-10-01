import React, { useState } from "react";
import { connect, styled } from "frontity";
import {
    Box,
    Heading,
    Link as ChakraLink,
    SimpleGrid,
    Stack,
    HStack,
    Text,
    Flex,
    Button,
    List,
    ListItem,
    ListIcon,
    Icon
    ,useMediaQuery
  } from '@chakra-ui/react';
  import { FaCheck, FaArrowLeft } from "react-icons/fa";
import ApplicationForm from "../application/applicationform";
import ardgradient20 from "../../assets/ardgradient20.jpeg";
import ardgradient14 from "../../assets/ardgradient14.jpeg";
import ardgradient19 from "../../assets/ardgradient19.jpeg";

const Offerings = ({ state, libraries }) => {
  const [offerChoice, setOfferChoice] = useState(false)
  const Html2React = libraries.html2react.Component;
  const offeringItems = state.source.get("/offering/main");
  const offeringData = state.source[offeringItems.type][offeringItems.id];
  console.log("offeringData", offeringData);
  const displaySection = offeringData.acf.display_section;
  const offeringsArr = offeringData.acf.offerings;
  const displayMarquee = offeringData.acf.display_marquee_promo;
  const marqueeArr = offeringData.acf.promo_marquee_text;
  const [isSmallerThan420] = useMediaQuery('(max-width: 420px)');

    return (
        <Box id="offers-section" bgGradient='linear(to-tr, brand.800, brand.300, brand.900)'>  
        {/* <Box id="offers-section" backgroundImage={{base: "none", sm: `url("${ardgradient14}")`}} backgroundAttachment="fixed" backgroundSize="cover" backgroundPosition="bottom"> */}
        <Flex direction="column" alignItems="center" pt={20} pb={20}>
            
            {!offerChoice &&
                <>
                    <Stack
                    spacing={14}
                    pl={10}
                    pr={10}
                    maxWidth={{ base: "inherit", md: "80%", lg: "inherit"}}
                    >
                        {!isSmallerThan420 &&
                        <Heading size="2xl" color="brand.200" fontFamily="GraphikSemibold" fontWeight="600" width="100%" textAlign="center">Choose Your Transformation</Heading>
                        }
                        {isSmallerThan420 &&
                        <Box>
                            <Heading size="xl" color="brand.200" fontFamily="GraphikSemibold" fontWeight="600" width="100%" textAlign="center">Choose Your</Heading>
                            <Text fontSize="3xl" color="brand.200" fontFamily="GraphikSemibold" fontWeight="600" width="100%" textAlign="center">Transformation</Text>
                        </Box>
                        }
                        <SimpleGrid
                            columns={{
                            base: 1,
                            lg: 3,
                            }}
                            rowGap={{
                            base: '8',
                            md: '12',
                            }}
                            columnGap="6"
                            bg="transparent"
                        >
                            {offeringsArr.map((offer, idx) => {
                                return (
                                    <ChakraLink
                                        key={idx}
                                        _hover={{
                                        textDecor: 'none',
                                        }}
                                        role="group"
                                        bg="brand.800"
                                        borderRadius="30px"
                                        boxShadow="lg"
                                        _groupHover={{
                                            boxShadow: 'xl',
                                        }}
                                    >
                                        <Flex direction="column" height="100%">

                                            <Flex direction="column" alignItems="center" justifyContent="center" minHeight="140px" p={5} bg="brand.200" borderRadius="30px 30px 0px 0px">
                                                    <Heading size="2xl" color={offer.offering_color} fontFamily="Amalta" fontWeight="500" textAlign="center">{offer.title}</Heading>
                                            </Flex>
                                            
                                            <Box
                                            p="6"
                                            bg="bg.surface"
                                            transition="all 0.2s"
                                            height="100%"
                                            >
                                                <Stack
                                                    spacing={{
                                                    base: '8',
                                                    lg: '16',
                                                    }}
                                                    justify="space-between"
                                                    height="100%"
                                                >
                                            
                                                        <Stack spacing="3" height="100%">
                                                            <Flex direction="column" justifyContent="space-between" height="100%">
                                                                <Stack>
                                                                    <Text fontSize="5xl" fontWeight={{base: "500", md: "600"}} fontFamily={{base: "GraphikSemibold", md: "Produkt"}} textAlign="center">
                                                                        {offer.price}
                                                                    </Text>
                                                                    <List spacing={5}>
                                                                    {offer.bullet_points.map((item, idx) => {
                                                                        return (
                                                                            <ListItem key={idx} fontSize={{base: "md", md: "lg"}}>
                                                                                <ListIcon as={FaCheck} color='brand.200' />
                                                                                <Html2React html={item.bullet_point} />
                                                                            </ListItem>
                                                                        )
                                                                    })}
                                                                    </List>
                                                                </Stack>
                                                        
                                                                <Button onClick={(e) => setOfferChoice(offer.title)} variant={offer.offering_color} border="2px solid" borderColor="brand.200" size="lg" fontWeight={{base: "500", md: "600"}} fontFamily={{base: "GraphikSemibold", md: "Produkt"}} letterSpacing="1px" mt={5}>{offer.button_text}</Button>  
                                                            </Flex>
                                                        </Stack>
                                    
                                                </Stack>
                                            </Box>
                                        </Flex>
                                    </ChakraLink>
                            )
                            }
                            )}
                        </SimpleGrid>
                    </Stack>
                </>
            }
            {offerChoice && 
                <Flex pl={{base: 10, md: 20}} pr={{base: 10, md: 20}} direction="column">
                    <ApplicationForm packageSelection={offerChoice} />
                    <Flex width="100%" alignItems="flex-start" mt={3}>
                        <Button bg="transparent" outline="0px solid transparent" _hover={{border: "0px solid transparent", color: "brand.400"}} onClick={(e) => setOfferChoice(false)}>
                            <Icon as={FaArrowLeft} mr={3} /> <Text>Let me see the offers again</Text>
                        </Button>
                    </Flex>
                </Flex>
            }
        </Flex>
        {displayMarquee &&
            <Flex direction="row" bg="brand.200" height="50px" width="100%" alignItems="center">
                <marquee>
                    <HStack>
                        {marqueeArr.map((item, idx) => {
                            return (
                                <HStack key={idx}>
                                    <Text size="lg" color="brand.800" fontFamily={item.marquee_item_font} fontWeight="500" pr={5}>{item.marquee_item}</Text>
                                    <Text size="lg" color="brand.300" fontFamily="GraphikBlack" pr={5}> | </Text>
                                </HStack>
                            )
                        })}
                    </HStack>
                </marquee>
            </Flex>
        }   
    </Box>
    )
}

export default connect(Offerings);

const OffersContainer = styled.section`
    /* background-color: #1f1f1f; */
    background-attachment: fixed;
    background-size: cover;
    background-position: bottom;
}
`
