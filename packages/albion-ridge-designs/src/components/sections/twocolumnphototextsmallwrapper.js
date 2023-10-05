import React from "react";
import TwoColumnPhotoTextSmall from "./twocolumnphototextsmall";

const TwoColumnPhotoTextSmallWrapper = ({ columnPairs, includeBorder }) => {
    return (
      <>
      {columnPairs.map((section, idx) => {
      return (
        <TwoColumnPhotoTextSmall
        backgroundColor={section.background_color}
        buttonLink={section.button_link}
        buttonText={section.button_text}
        fullFramePhoto={section.full_frame_photo}
        heading={section.heading}
        subheading={section.subheading}
        headingFont={section.heading_font}
        subheadingFont={section.subheading_font}
        image={section.image}
        imageSide={section.image_side}
        text={section.text}
        textColor={section.text_color}
        height={section.height}
        html={section.html}
        includeBorder={includeBorder}
        key={idx}
      />
      )
      })
      }
      </>
    )
  }

export default TwoColumnPhotoTextSmallWrapper;
