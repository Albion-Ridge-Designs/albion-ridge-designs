import React, { useState, useEffect } from "react"
import { connect } from "frontity"
import dayjs from "dayjs"
import {
  Heading,
  Text,
  Flex,
  Box,
} from '@chakra-ui/react';
import useSticky from "../../hooks/useSticky";
import BlogHero from "./bloghero";
import Quote from "../sections/quote";
import Instagram from "../instagram/instagram";
import Cta from "../sections/cta";
import TwoColumnPhotoTextSmallWrapper from "../sections/twocolumnphototextsmallwrapper";
import Gallery from "../gallery/gallery";
import LoadingSmall from "../loadingsmall";

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id];
  const postSections = post.acf.post_sections;
  const Html2React = libraries.html2react.Component
  const formattedDate = dayjs(post.date).format("MMMM DD, YYYY")
  const { element } = useSticky();

  const [quote, setQuote] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [twoColumnPhotoTextSmall, setTwoColumnPhotoTextSmall] = useState([]);
  const [twoColumnBorder, setTwoColumnBorder] = useState(true);
  const [squares, setSquares] = useState([]);
  const [partOne, setPartOne] = useState("");
  const [partTwo, setPartTwo] = useState("");

  useEffect(() => {
    const doc = new DOMParser().parseFromString(post.content.rendered, 'text/html');
    const arr = [...doc.body.childNodes]
      .map(child => child.outerHTML || child.textContent);
    let arrLength = arr.length;
    let halfLength = Math.round((arrLength - 1) / 2);

    let firstPart = [];
    let secondPart = [];
    arr.map((paragraph, idx) => {
      if (idx < halfLength) {
        firstPart.push(paragraph);
      }
      else {
        secondPart.push(paragraph)
      }
    })
    setPartOne(firstPart);
    setPartTwo(secondPart);
  }, [])


  useEffect(() => {
    if (postSections) {
      postSections.map((section) => {
        if (section.acf_fc_layout === "quote") {
          setQuote(section);
        }
        if (section.acf_fc_layout === "gallery") {
          let galleryArr = [];
          section.gallery.map((data, idx) => {
            let obj = {
              id: idx,
              src: data.url,
              alt: data.alt,
              aspectRatio: 4 / 3,
              objectFit: "contain !important"
            };
            galleryArr.push(obj);
          })
          setGallery(galleryArr);
        }
        if (section.acf_fc_layout === "two_column_photo_text_small_photo") {
          setTwoColumnPhotoTextSmall(section.column_pairs);
          setTwoColumnBorder(section.include_image_border)
        }
        if (section.acf_fc_layout === "photo_squares") {
          setSquares(section.photo_square);
        }
      })
    }
  }, [])

  if (data.isFetching) {
    return <LoadingSmall background="brand.800" />
  }

  if (!data.isFetching) {
    return (
      <Box minHeight="85vh" background="brand.800">
        <style>
          {
            `#storybook {
              &:first-letter {
                font-family: Amalta;
                -webkit-initial-letter: 2 3;
                initial-letter:  2 3;
                border: 5px solid #000;
                background: #FEFAF1;
                color: #EC9F05; 
                font-weight: 500;
                margin-right: .75em;
                padding: .75em;
              }
            }
              `
          }
        </style>
        <BlogHero element={element} image={state.source.attachment[post.featured_media].source_url} title={post.title.rendered} date={formattedDate} />
        
        <Flex direction="column" bg="brand.800" p={{base: 4, md: 0}}>

          {/* {quote.length !== 0 &&
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
            } */}
          
            {partOne.length > 0 &&
              <Flex 
              direction="column"
              width="100%" 
              height="100%"
              paddingLeft={{base: 5, lg: 20}}
              paddingRight={{base: 5, lg: 20}}
              paddingTop={{base: 5, lg: 20}}
              bg="brand.800"
            >
              <Flex direction="column">
                {partOne.map((item, idx) => {
                  return (
                    <Box fontWeight={500} fontSize="lg" color="blackAlpha.800" className="page-text" key={idx}>
                      {idx === 0 &&
                        <Box id="storybook">
                          <Html2React html={item} />
                        </Box>
                      }
                      {idx !== 0 &&
                        <Html2React html={item} />
                      }
                    </Box>
                  )
                })}
              </Flex>
            </Flex>
            }

            {quote.length !== 0 &&
            <Box
              paddingTop={{base: 5, lg: 10}}
              paddingBottom={{base: 5, lg: 10}}
            >
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
            </Box>
            }

              
            {partTwo.length > 0 &&
              <Flex 
              direction="column"
              width="100%" 
              height="100%"
              paddingLeft={{base: 5, lg: 20}}
              paddingRight={{base: 5, lg: 20}}
              paddingBottom={{base: 5, lg: 20}}
              bg="brand.800"
            >
              <Flex direction="column">
                {partTwo.map((item, idx) => {
                  return (
                    <Text fontWeight={500} fontSize="lg" color="blackAlpha.800" className="page-text" key={idx}>
                      <Html2React html={item} />
                    </Text>
                  )
                })}
              </Flex>
            </Flex>
            }

        </Flex>

        {twoColumnPhotoTextSmall.length > 0 &&
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
        
        {gallery.length > 0 &&
        <Flex direction="column" bg="brand.100" minHeight="fit-content">
          <Heading color="brand.800" size="2xl" fontFamily="Amalta" fontWeight="500" width="100%" textAlign="center" mt={16}>Post Gallery</Heading>
          <Gallery images={gallery} />
        </Flex>
        }

        <Cta />
        <Instagram limit={12} />
      </Box>
    )
  }
}

export default connect(Post);
