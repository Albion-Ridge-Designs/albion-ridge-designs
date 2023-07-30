import React from "react";
import { 
  connect, 
  Global, 
  css, 
  Head
} from "frontity";
import {
  extendTheme,
  Flex,
  Heading,
  Grid,
  GridItem
} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import Switch from "@frontity/components/switch";
import Homepage from "./homepage/homepage";
import List from "./list/list";
import Post from "./post";
import Page from "./page";
import Navigation from "./navigation";
import Footer from "./footer";
import Loading from "./loading";

const Root = ({ state }) => {
    const data = state.source.get(state.router.link);
    const isBlog = state.router.link.startsWith("/blog");

    const theme = extendTheme({
      colors: {
        brand: {
          100: "#1D1A05",  // smoky black
          200: "#FAFAFF",  // ghost white
          300: "#F4D35E",  // chartreuse/aureolin
          400: "#9C6615",  // golden brown
          500: "#447604",  // avocado
          600: "#001427",  // oxford blue
          700: "#FEFAF1",  // white
          800: "#333333",  // blackAlpha.800
          
        },
      },
      fonts: {
        heading: "Lora",
        body: "Montserrat"
      }
    });
  
    return (
      <ChakraProvider theme={theme}>
          <Head>
            <title>Albion Ridge Designs</title>
            <meta
              name="description"
              content="Albion Ridge Designs is a Mendocino web design agency"
            />
        </Head>
        <Global
          styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: "Montserrat";
          }
          li {
            line-height: 1.85em;
          }
          iframe {
            width: 100% !important;
          }
          figure {
            margin-top: 10px;
            margin-bottom: 10px;
            @media (max-width: 600px) {
              max-width: 90vw;
              margin-top: 40px;
              margin-bottom: 40px;
            }
          }
          li {
            margin-bottom: 10px;
            line-height: 1.55em;
            font-size: 17px;
          }
          .page-text p {
            margin-top: 1em;
          }
          .blogPost p img {
            margin-bottom: 1em;
          }
          .calendly-inline-widget  {
            height: 1000px !important;
          }
        `}
        />

        <Grid
          templateAreas={`"header"
                          "main"
                          "footer"`}
          gridTemplateRows={'80px 1fr 70px'}
          gridTemplateColumns={'1fr'}
          minHeight='100vh'
          gap='1'
          color='blackAlpha.400'
          fontWeight='bold'
          bg="brand.800"
        >
          <GridItem bg='orange.300' area={'header'}>
            <Navigation /> 
          </GridItem>

          <GridItem bg='brand.200' area={'main'}>
            {state.router.link === "/" &&
              <Homepage />
            }

            <Switch>
              <Loading when={data.isFetching} />
              <List when={data.isArchive} />
              <Post when={data.isPost} />
              <Page when={data.isPage} />
            </Switch>
          </GridItem>

          <GridItem bg='blue.300' area={'footer'}>
            <Footer />
          </GridItem>
        </Grid>
      </ChakraProvider>
    )
  }
  
  export default connect(Root);
