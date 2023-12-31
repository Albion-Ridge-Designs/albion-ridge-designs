import React, { useState, useEffect, useRef } from "react";
import { connect } from "frontity"
import {
    Box,
    Heading,
    Flex,
    useMediaQuery
  } from '@chakra-ui/react';
import { Chrono } from "react-chrono";
import ardgradient19 from "../../assets/ardgradient19.jpeg";

function Timeline({ state }) {
  const options = state.source.get("acf-options-page");
  const timelineItems = state.source.get("/timeline/main");
  const timelineData = state.source[timelineItems.type][timelineItems.id];
  console.log("section id", timelineData.acf.section_id)
  const displaySection = timelineData.acf.display_section;
  const timelineArr = timelineData.acf.timeline;
  const [timelineEvents, setTimelineEvents] = useState([]);
  const timelineSection = useRef();
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    let eventsArr = [];
    timelineArr.map((item) => {
      let eventObject = {
        date: "",
        title: "",
        cardTitle: "",
        cardSubtitle: "",
        cardDetailedText: "",
        media: {
          name: "",
          source: {
            url: "",
          },
          type: "IMAGE"
        }
      }

      eventObject.date = item.date;
      eventObject.title = item.date;
      eventObject.cardTitle = item.card_title;
      eventObject.cardSubtitle = item.card_subtitle;
      eventObject.cardDetailedText = item.card_detailed_text;
      eventObject.media.name = item.image.alt;
      eventObject.media.source.url = item.image.url;
      eventsArr.push(eventObject);
    })
    setTimelineEvents(eventsArr);
  }, [])

  if (displaySection === true) {
  return (
    <>
      <style>
        {
          `.timeline-card-content {
                border: 2px solid ${options.acf.brand_200};
            }
            .timeline-card-content span:first-of-type {
              left: -13px;
              border-top: 2px solid ${options.acf.brand_200};
              border-right: 2px solid ${options.acf.brand_200};
            }
            .timeline-vertical-circle {
              z-index: 0;
            }
            .timeline-item-title {
              min-width: fit-content
            }
            .card-media-wrapper {
              @media (max-width: 600px) {
                min-height: fit-content !important;
                height: fit-content !important;
              }
            }
            `
        }
      </style>
    <Box id={timelineData.acf.section_id} bgGradient='linear(to-t, brand.400, brand.600, brand.900)' borderBottom="2px solid #333333">
    {/* <Box id="timeline-section" ref={timelineSection} bg="brand.900" backgroundImage={{base: "none", sm: `url("${ardgradient19}")`}} backgroundAttachment="fixed" backgroundSize="cover" backgroundPosition="bottom"> */}
      <Flex direction="column" alignItems="center" width="100%" pt={20} pb={20}>
        <Heading size="2xl" color="brand.800" fontWeight="400" fontFamily="Amalta" className="test" mb={10}>Our Story</Heading>
      <Box width={{ base: "100%", md: "800px" }}> 
        {isSmallerThan768 && timelineEvents.length > 0 &&
          <Chrono
          items={timelineEvents}
          mode="VERTICAL"
          useReadMore={false}
          hideControls
          theme={{
            primary: options.acf.brand_300, //"#EC9F05",
            secondary: options.acf.brand_600, //"#ABC4A1",
            cardBgColor: options.acf.brand_800, // "#FEFAF1",
            titleColor: options.acf.brand_800 //"#FEFAF1",
          }}
          classNames={{
            card: 'my-card',
            cardMedia: 'my-card-media',
            cardSubTitle: 'my-card-subtitle',
            cardText: 'my-card-text',
            cardTitle: 'my-card-title',
            controls: 'my-controls',
            title: 'my-title',
          }}
        />
        }
        {!isSmallerThan768 && timelineEvents.length > 0 &&
          <Chrono
              items={timelineEvents}
              mode="VERTICAL_ALTERNATING"
              useReadMore={false}
              hideControls
              theme={{
                primary: "#D76A03",
                secondary: "#ABC4A1",
                cardBgColor: "#FEFAF1",
                titleColor: "#FEFAF1",
              }}
              classNames={{
                card: 'my-card',
                cardMedia: 'my-card-media',
                cardSubTitle: 'my-card-subtitle',
                cardText: 'my-card-text',
                cardTitle: 'my-card-title',
                controls: 'my-controls',
                title: 'my-title',
              }}
            />
          }
      </Box>
      </Flex>
    </Box>
    </>
  );
  }
  if (displaySection === false) {
    return (
        <></>
    )
}
}

export default connect(Timeline);
