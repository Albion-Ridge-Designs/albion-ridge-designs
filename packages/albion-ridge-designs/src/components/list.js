import React, { useState, useEffect } from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"
import {
  Heading,
  Flex,
  Box
} from '@chakra-ui/react';
import axios from "axios";
import useSticky from "../hooks/useSticky";
import BlogHero from "./post/bloghero";
import Loading from "./loading";
import Instagram from "./instagram/instagram";
import Cta from "./sections/cta";
import windowflowers from "../assets/windowflowers.jpg"

const List = ({ state, libraries, actions }) => {
  const data = state.source.get(state.router.link);
  const Html2React = libraries.html2react.Component;
  const { element } = useSticky();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    async function fetchPosts () {
      let allPosts;
      try{
        axios
            .get("https://wptemplates.albionridgedesigns.com/wp-json/wp/v2/posts")
            .then((resp) => {
                setPosts(resp.data);
            })
      } catch (err) {
          console.log('error', err)
      }
    }
    
    await fetchPosts();
    setLoading(false);
}, [])

  if (loading) {
    return <Loading background="brand.800" />
  }

  if (!loading) {
    return (
      <>
      <style>
        {
          `#listdropcap {
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
        <BlogHero element={element} image={windowflowers} title="The Albion Design Gazette" date="" />
        <Flex 
        direction="column"
        width="100%" 
        height="100%"
        minHeight="85vh"
        padding={{base: 5, lg: 20}}
        bg="brand.800"
        pb={14}
      >
          {posts.map((item) => {
            // const post = state.source[item.type][item.id];
            return (
              <>
              <Flex direction="column" key={item.id} mt={14}>
                <Link link={item.link}>
                  <Heading size="lg" mb={2} color="brand.100">
                    <Html2React html={item.title.rendered} />
                  </Heading>
                </Link>
                <Flex direction="column">
                  <Box id="listdropcap" fontWeight={500} mb={4} fontSize="lg" color="blackAlpha.800" className="page-text">
                    <Html2React html={item.excerpt.rendered} />
                  </Box>
                  <Link key={item.id} link={item.link}>
                    Read More
                  </Link>
              </Flex>
            </Flex>
            </>
            )
          })}
          <Flex direction="row">
            {data.previous && (
              <button
                onClick={() => {
                  actions.router.set(data.previous)
                }}
              >
                &#171; Prev
              </button>
            )}
            {data.next && (
              <button
                onClick={() => {
                  actions.router.set(data.next)
                }}
              >
                Next &#187;
              </button>
            )}
          </Flex>
        </Flex>
        <Cta />
        <Instagram limit={12} />
      </>
    )
  }
}

export default connect(List);
