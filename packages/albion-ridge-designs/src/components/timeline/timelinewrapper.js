import React, { useState, useEffect, useRef } from "react";
import { connect, styled } from "frontity"
import {
    Box,
    Heading,
    Flex,
    useMediaQuery
  } from '@chakra-ui/react';
import { Chrono } from "react-chrono";
import Timeline from "./timeline";
import ardgradient19 from "../../assets/ardgradient19.jpeg";

function TimelineWrapper({ state }) {
  const timelineItems = state.source.get("/timeline/main");
  const timelineData = state.source[timelineItems.type][timelineItems.id];
  const displaySection = timelineData.acf.display_section;
  const timelineArr = timelineData.acf.timeline;
  console.log("timelineArr", timelineArr);
  const [timelineEvents, setTimelineEvents] = useState([]);
  const timelineSection = useRef();
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)')
  const [isSmallerThan480] = useMediaQuery('(max-width: 480px)')

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
        <TimelineContainer id="timeline-section" ref={timelineSection} style={{ backgroundImage: `url("${ardgradient19}")` }}>
            <Timeline timelineEvents={timelineEvents} />
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

export default connect(TimelineWrapper);

const TimelineContainer = styled.section`
    background-color: #1f1f1f;
    background-attachment: fixed;
    background-size: cover;
    background-position: bottom;
}
`