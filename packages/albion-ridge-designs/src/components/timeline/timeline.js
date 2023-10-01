import React, { useState, useEffect, useRef } from "react";
import { connect, styled } from "frontity"
import {
    Box,
    Heading,
    Flex,
    useMediaQuery
  } from '@chakra-ui/react';
import { Chrono } from "react-chrono";
import ardgradient19 from "../../assets/ardgradient19.jpeg";

function Timeline({ state, libraries }) {
  const timelineItems = state.source.get("/timeline/main");
  const timelineData = state.source[timelineItems.type][timelineItems.id];
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
                border: 2px solid #333333;
            }
            .timeline-card-content span:first-of-type {
              left: -13px;
              border-top: 2px solid #333333;
              border-right: 2px solid #333333;
            }
            .timeline-vertical-circle {
              z-index: 0;
            }
            `
        }
      </style>
    <TimelineContainer id="timeline-section" ref={timelineSection} style={{ backgroundImage: `url("${ardgradient19}")` }}>
      <Flex direction="column" alignItems="center" width="100%" pt={20} pb={20}>
        <Heading size="2xl" fontWeight="400" fontFamily="Amalta" className="test" mb={10}>Our Story</Heading>
      <Box width={{ base: "100%", md: "800px" }}> 
        {isSmallerThan768 && timelineEvents.length > 0 &&
          <Chrono
          items={timelineEvents}
          mode="VERTICAL"
          useReadMore={false}
          hideControls
          theme={{
            primary: "#EC9F05",
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
        {!isSmallerThan768 && timelineEvents.length > 0 &&
          <Chrono
              items={timelineEvents}
              mode="VERTICAL_ALTERNATING"
              useReadMore={false}
              hideControls
              theme={{
                primary: "#EC9F05",
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
    </TimelineContainer>
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

const TimelineContainer = styled.section`
    background-color: #1f1f1f;
    background-attachment: fixed;
    background-size: cover;
    background-position: bottom;
}
`
