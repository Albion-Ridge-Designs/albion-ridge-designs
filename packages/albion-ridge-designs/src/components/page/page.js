import React, { useState, useEffect } from "react"
import { connect } from "frontity"
import {
  Flex
} from '@chakra-ui/react';
import Homepage from "../homepage/homepage";
import Hero from "../header/hero";
import PageHero from "./pagehero";
import Parallax from "../sections/parallax";
import HeadingBanner from "../sections/headingbanner";
import FullWidthText from "../sections/fullwidthtext";
import TwoColumnPhotoTextWrapper from "../sections/twocolumnphototextwrapper";
import TwoColumnPhotoTextSmallWrapper from "../sections/twocolumnphototextsmallwrapper";
import Quote from "../sections/quote";
import PhotoSquares from "../sections/photosquares/photosquares";
import BulletPointsCta from "../sections/bulletpointscta";
import Cta from "../sections/cta";
import Instagram from "../instagram/instagram";
import Contact from "../contact/contact"
import Loading from "../loading";
import ardgradient14 from "../../assets/ardgradient14.jpeg";
import ardgradient19 from "../../assets/ardgradient19.jpeg";
import ardgradient20 from "../../assets/ardgradient20.jpeg";

const Page = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id]
  const pageSections = post.acf.page_sections;
  const heroBackground = post.acf.background;
  console.log("herobackground", heroBackground);
  const heroText = post.acf.hero_text;
  console.log("heroText", heroText);
  const options = state.source.get("acf-options-page");
  const [heroSection, setHeroSection] = useState([]);
  const [headingBanner, setHeadingBanner] = useState([]);
  const [fullWidthTextSection, setFullWidthTextSection] = useState([]);
  const [twoColumnPhotoText, setTwoColumnPhotoText] = useState([]);
  const [twoColumnPhotoTextSmall, setTwoColumnPhotoTextSmall] = useState([]);
  const [twoColumnBorder, setTwoColumnBorder] = useState(true);
  const [quote, setQuote] = useState([]);
  const [squares, setSquares] = useState([]);
  const [parallax, setParallax] = useState([]);
  const [promo, setPromo] = useState([]);
  const [bullets, setBullets] = useState([]);
  console.log("post.acf", post.acf);

  useEffect(() => {
      pageSections.map((section) => {
        if (section.acf_fc_layout === "hero") {
          setHeroSection(section);
        }
        if (section.acf_fc_layout === "heading_banner") {
          setHeadingBanner(section);
        }
        if (section.acf_fc_layout === "full_width_text_section") {
          setFullWidthTextSection(section)
        }
        if (section.acf_fc_layout === "two_column_photo_text") {
          setTwoColumnPhotoText(section.column_pairs);
        }
        if (section.acf_fc_layout === "two_column_photo_text_small_photo") {
          setTwoColumnPhotoTextSmall(section.column_pairs);
          setTwoColumnBorder(section.include_image_border)
        }
        if (section.acf_fc_layout === "quote") {
          setQuote(section);
        }
        if (section.acf_fc_layout === "parallax") {
          setParallax(section);
        }
        if (section.acf_fc_layout === "photo_squares") {
          setSquares(section);
        }
        if (section.acf_fc_layout === "bullet_points_cta") {
          setBullets(section);
        }
        if (section.acf_fc_layout === "promo_section") {
          setPromo(section);
        }
      })
  }, [])

  if (data.isFetching) {
    return <Loading />
  }

  if (!data.isFetching) {
    return (
      <>
      {data.route === "/" &&
        <Hero 
          imageBackground={post.acf.background.image_background}
          gradientColors={post.acf.background.color_gradient_background.gradient_colors}
          gradientDirection={post.acf.background.color_gradient_background.gradient_direction}
          heroTopText={post.acf.hero_text.top_line_text}
          heroBottomText={post.acf.hero_text.bottom_line_text}
          highlightColors={post.acf.hero_text.highlight_colors}
          mainColor={post.acf.hero_text.main_hero_text_color}
          heroTextMobile={post.acf.hero_text_mobile.mobile_text}
          highlightColorsMobile={post.acf.hero_text_mobile.highlight_colors}
          mainColorMobile={post.acf.hero_text_mobile.main_mobile_text_color}
          ctaButtonText={post.acf.cta_button_text}
          ctaButtonLink={post.acf.cta_button_link}
        />
      }

      {data.route !== "/" && heroSection &&
        <PageHero 
          image={heroSection.image}
          heading={heroSection.heading}
          subheading={heroSection.subheading}
          headingTextColor={heroSection.heading_text_color}
          subheadingTextColor={heroSection.subheading_text_color}
        />
      }


      {pageSections.map((section, idx) => {
        return (
          <Flex direction="column" key={idx}>
            {section.acf_fc_layout === "heading_banner" &&
              <HeadingBanner 
              backgroundColor={headingBanner.background_color} 
              heading={headingBanner.heading}
              subheading={headingBanner.subheading}
              headingFont={headingBanner.heading_font}
              subheadingFont={headingBanner.subheading_font}
              text={headingBanner.text}
              textColor={headingBanner.text_color}
            />
            }
            {section.acf_fc_layout === "full_width_text_section" &&
              <FullWidthText
                backgroundColor={fullWidthTextSection.background_color}
                buttonLink={fullWidthTextSection.button_link}
                buttonText={fullWidthTextSection.button_text}
                buttonPosition={fullWidthTextSection.button_position}
                heading={fullWidthTextSection.heading}
                subheading={fullWidthTextSection.subheading}
                headingFont={fullWidthTextSection.heading_font}
                subheadingFont={fullWidthTextSection.subheading_font}
                headingPosition={fullWidthTextSection.heading_position}
                text={fullWidthTextSection.text}
                textColor={fullWidthTextSection.text_color}
              />
            }
            {section.acf_fc_layout === "two_column_photo_text" &&
              <TwoColumnPhotoTextWrapper 
                // backgroundColor={twoColumnPhotoText.background_color}
                // buttonLink={twoColumnPhotoText.button_link}
                // buttonText={twoColumnPhotoText.button_text}
                // fullFramePhoto={twoColumnPhotoText.full_frame_photo}
                // heading={twoColumnPhotoText.heading}
                // subheading={twoColumnPhotoText.subheading}
                // image={twoColumnPhotoText.image}
                // imageSide={twoColumnPhotoText.image_side}
                // text={twoColumnPhotoText.text}
                // textColor={twoColumnPhotoText.text_color}
                columnPairs={twoColumnPhotoText}
              />
            }
            {section.acf_fc_layout === "two_column_photo_text_small_photo" &&
              <TwoColumnPhotoTextSmallWrapper 
              // backgroundColor={twoColumnPhotoText.background_color}
              // buttonLink={twoColumnPhotoText.button_link}
              // buttonText={twoColumnPhotoText.button_text}
              // fullFramePhoto={twoColumnPhotoText.full_frame_photo}
              // heading={twoColumnPhotoText.heading}
              // subheading={twoColumnPhotoText.subheading}
              // image={twoColumnPhotoText.image}
              // imageSide={twoColumnPhotoText.image_side}
              // text={twoColumnPhotoText.text}
              // textColor={twoColumnPhotoText.text_color}
              columnPairs={twoColumnPhotoTextSmall}
              includeBorder={twoColumnBorder}
            />
            }
            {section.acf_fc_layout === "quote" &&
              <Quote 
                backgroundColor={quote.background_color}
                text={quote.text}
                author={quote.author}
                showAuthor={quote.show_author}
                textColor={quote.text_color}
                useDropCap={quote.use_drop_cap}
                dropCapBackgroundColor={quote.drop_cap_background_color}
                dropCapTextColor={quote.drop_cap_text_color}
              />
            }
            {section.acf_fc_layout === "parallax" &&
              <Parallax 
              image={parallax.image} 
              heading={parallax.heading}
              subheading={parallax.subheading}
              headingFont={parallax.heading_font}
              subheadingFont={parallax.subheading_font}
              text={parallax.text}
              textColor={parallax.text_color}
              includeText={parallax.include_text} 
              height={parallax.height}
              position={parallax.position} 
            />
            }
            {/* {section.acf_fc_layout === "photo_squares" &&
              <PhotoSquares
                items={squares}
            />
            } */}
            {section.acf_fc_layout === "bullet_points_cta" &&
              <BulletPointsCta
                backgroundColor={bullets.background_color}
                textColor={bullets.text_color}
                iconColor={bullets.icon_color}
                headingText={bullets.heading}
                icon={bullets.icon}
                includeCta={bullets.include_cta}
                bulletPoints={bullets.bullet_points_list}
            />
            }
            {section.acf_fc_layout === "promo_section" &&
              <Cta
                backgroundColor={promo.background_color}
                textColor={promo.text_color}
                headingText={promo.heading}
                image={promo.image}
                buttonText={promo.cta_button_text}
                buttonLink={promo.cta_button_link}
            />
            }
          </Flex>
        )
      })
      }

      {data.route === "/" &&
        <Homepage />
      }

        {/* <Cta /> */}
        <Instagram limit={12} />
      </>
    )
  }
}

export default connect(Page);
