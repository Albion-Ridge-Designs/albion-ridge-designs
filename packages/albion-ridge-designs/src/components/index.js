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
        brand0: {
          100: "#1D1A05",  // smoky black
          200: "#333333",  // blackAlpha.800
          300: "#F4D35E",  // chartreuse/aureolin
          400: "#9C6615",  // golden brown
          500: "#447604",  // avocado
          600: "#001427",  // oxford blue
          700: "#FAFAFF",  // ghost white
          800: "#FEFAF1",  // white
        },
        brand1: {
          100: "#1D1A05",  // smoky black
          200: "#333333",  // blackAlpha.800
          300: "#2C685D",  // myrtle green
          400: "#FCB07E",  // sandy brown
          500: "#DEE2D6",  // alabaster
          600: "#EBE9E9",  // platinum
          700: "#F3F8F2",  // mint cream
          800: "#FEFAF1",  // white
        },
        brand2: {
          100: "#1D1A05",  // smoky black
          200: "#333333",  // blackAlpha.800
          300: "#2C685D",  // myrtle green
          400: "#96A13A",  // moss green
          500: "#BFDBF7",  // columbia blue
          600: "#E1E5F2",  // lavender (web)
          700: "#FFFFFF",  // white
          800: "#FEFAF1",  // white
        },
        brand3: {
          100: "#1D1A05",  // smoky black
          200: "#333333",  // blackAlpha.800
          300: "#2C685D",  // myrtle green
          400: "#F08700",  // tangerine
          500: "#F49F0A",  // gamboge
          600: "#EFCA08",  // jonquil
          700: "#BBDEF0",  // columbia blue
          800: "#FEFAF1",  // white
        },
        brand4: {
          100: "#1D1A05",  // smoky black
          200: "#333333",  // blackAlpha.800
          300: "#2C685D",  // myrtle green
          400: "#001427",  // oxford blue
          500: "#8D0801",  // dark red
          600: "#BF0603",  // engineering orange
          700: "#F4D58D",  // jasmine
          800: "#FEFAF1",  // white
        },
        brand: {
          100: "#1D1A05",  // smoky black
          200: "#333333",  // blackAlpha.800
          300: "#2C685D",  // myrtle green
          400: "#2F3061",  // delft blue
          500: "#0E34A0",  // egyptian blue
          600: "#DBD56E",  // straw
          700: "#DFDFDF",  // platinum
          800: "#FEFAF1",  // white
        },
        // brand6: {
        //   100: "#1D1A05",  // smoky black
        //   200: "#333333",  // blackAlpha.800
        //   300: "#2C685D",  // myrtle green
        //   400: "#826754",  // coyote
        //   500: "#AD5D4E",  // redwood
        //   600: "#EB6534",  // giants orange
        //   700: "#ACBEA3",  // ash gray
        //   800: "#FEFAF1",  // white
        // },
        // brand7: {
        //   100: "#1D1A05",  // smoky black
        //   200: "#333333",  // blackAlpha.800
        //   300: "#2C685D",  // myrtle green
        //   400: "#E76F51",  // burnt sienna
        //   500: "#F4A261",  // sandy brown
        //   600: "#E9C46A",  // saffron
        //   700: "#A5D8FF",  // uranian blue
        //   800: "#FEFAF1",  // white
        // },
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
          <GridItem bg='brand.300' area={'header'}>
            <Navigation /> 
          </GridItem>

          <GridItem bg='brand.600' area={'main'}>
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

          <GridItem area={'footer'}>
            <Footer />
          </GridItem>
        </Grid>
      </ChakraProvider>
    )
  }
  
  export default connect(Root);
