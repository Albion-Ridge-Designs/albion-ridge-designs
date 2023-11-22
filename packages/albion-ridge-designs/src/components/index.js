import React, { useState, useEffect } from "react";
import { 
  connect, 
  Global, 
  css, 
  Head
} from "frontity";
import {
  extendTheme,
} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import Switch from "@frontity/components/switch";
import useFontFaceObserver from 'use-font-face-observer';
import Navbar from "./header/navbar";
import Footer from "./footer";
import List from "./list";
import Post from "./post/post";
import Page from "./page/page";
import Loading from "./loading";
import Error from "./error";
import Amalta from '../assets/fonts/Amalta-Amalta-Web.ttf';
import Graphik from '../assets/fonts/Graphik-Regular-Web.ttf';
import GraphikSemibold from '../assets/fonts/Graphik-Semibold-Web.ttf';
import GraphikBlack from '../assets/fonts/Graphik-Black-Web.ttf';
import Produkt from '../assets/fonts/Produkt-Regular-Web.ttf';

export const stickyContext = React.createContext({
  isSticky: false,
  setSticky: () => {}
});

const Root = ({ state }) => {
    const options = state.source.get("acf-options-page");
    const siteName = options.acf.brand_name;
    const siteDomain = options.acf.site_domain;
    const data = state.source.get(state.router.link);
    const isBlog = state.router.link.startsWith("/blog");
    const menuItems = state.source.get("/menu/main");
    const menuData = state.source[menuItems.type][menuItems.id];
    const footerItems = state.source.get("/menu/main");
    const footerData = state.source[menuItems.type][menuItems.id];
    const [isSticky, setSticky] = useState(false);

    const isFontLoaded = useFontFaceObserver([
      { family: 'Amalta' }, // Same name you have in your CSS
    ]);

    useEffect(() => {
    }, [isFontLoaded]);

    const theme = extendTheme({
        colors: {
          brand: {
            100: `${options.acf.brand_100}`,  // smoky black
            200: `${options.acf.brand_200}`,  // blackAlpha.800
            300: `${options.acf.brand_300}`, // gamboge 
            400: `${options.acf.brand_400}`, // cocoa brown 
            500: `${options.acf.brand_500}`,  // celadon 
            600: `${options.acf.brand_600}`,  // dark celadon 
            700: `${options.acf.brand_700}`,  // ash gray 
            800: `${options.acf.brand_800}`,  // white 
            900: `${options.acf.brand_900}`,  // powder blue
            smokyBlack: `${options.acf.brand_100}`,  // smoky black
            black: `${options.acf.brand_200}`,  // blackAlpha.800
            gamboge: `${options.acf.brand_300}`, // gamboge 
            cocoaBrown: `${options.acf.brand_400}`, // cocoa brown 
            celadon: `${options.acf.brand_500}`,  // celadon 
            darkCeladon: `${options.acf.brand_600}`,  // dark celadon 
            ashGray: `${options.acf.brand_700}`,  // ash gray 
            white: `${options.acf.brand_800}`,  // white 
            powderBlue: `${options.acf.brand_900}`,  // powder blue
          //   100: "#1D1A05",  // smoky black
          //   200: "#333333",  // blackAlpha.800
          //   300: "#EC9F05", // gamboge 
          //   400: "#D76A03", // cocoa brown 
          //   500: "#BBDB9B",  // celadon 
          //   600: "#ABC4A1",  // celadon 
          //   700: "#9DB4AB",  // ash gray 
          //   800: "#FEFAF1",  // white, 
          //   900: "#91B7C7",  // powder blue
          },
          // brand: {
          //   100: "#1D1A05",  // smoky black
          //   200: "#333333",  // blackAlpha.800
          //   300: "#EC9F05", // gamboge 
          //   400: "#D76A03", // cocoa brown 
          //   500: "#BBDB9B",  // celadon 
          //   600: "#ABC4A1",  // celadon 
          //   700: "#9DB4AB",  // ash gray 
          //   800: "#FEFAF1",  // white, 
          //   900: "#91B7C7",  // powder blue
          // },
        },
        fonts: {
          heading: "GraphikSemibold",
          body: "Produkt"
        },
        textStyles: { 
            primary: {
                fontFamily: "Graphik"
            },
            secondary: {
                fontFamily: "Amalta"
            },
        },
        components: {
          Button: {
            baseStyle: {
              fontWeight: 'bold', // Normally, it is "semibold"
            },
            variants: {
              outline: {
                border: "2px solid transparent",
                _hover: {
                  bg: "#FEFAF1",
                  color: "#333333",
                },
              },
              solid: {
                bg: "#FEFAF1",
                color: "#333333",
                border: "0px solid transparent",
                _hover: {
                  bg: "transparent",
                  border: "2px solid #FEFAF1",
                },
              },
              "blackOutline": {
                border: "2px solid #1D1A05"
              },
              "whiteOutline": {
                border: "2px solid #FEFAF1",
                color: "#FEFAF1",
                _hover: {
                  bg: "#9DB4AB",
                },
              },
              "whiteBlackOutline": {
                bg: "#FEFAF1",
                color: "#333333",
                border: "2px solid transparent",
                _hover: {
                  bg: "transparent",
                  border: "2px solid #FEFAF1",
                },
              },
              "brand.100": {
                bg: "#1D1A05",
                color: "#FEFAF1",
              },
              "brand.200": {
                bg: "#333333",
                color: "#FEFAF1",
              },
              "brand.300": {
                bg: "#EC9F05",
                _hover: {
                  bg: "#BBDB9B",
                  color: "#FEFAF1",
                },
              },
              "brand.400": {
                bg: "#D76A03",
                color: "#FEFAF1",
                _hover: {
                  bg: "#BBDB9B",
                  color: "#D76A03",
                },
              },
              "brand.500": {
                bg: "#BBDB9B",
                color: "#333333",
                _hover: {
                  bg: "#EC9F05",
                  color: "#FEFAF1",
                },
              },
              "brand.600": {
                bg: "#ABC4A1",
                _hover: {
                  bg: "#EC9F05",
                  color: "#FEFAF1",
                },
              },
              "brand.700": {
                bg: "#9DB4AB",
                color: "#FEFAF1",
                _hover: {
                  bg: "#BBDB9B",
                  color: "#FEFAF1",
                },
              },
              "brand.800": {
                bg: "transparent",
                color: "#FEFAF1",
                border: "2px solid #FEFAF1",
                _hover: {
                  bg: "#BBDB9B",
                  color: "#FEFAF1",
                },
              },
              "brand.900": {
                bg: "#91B7C7",
                color: "#333333",
                _hover: {
                  bg: "#EC9F05",
                  color: "#FEFAF1",
                },
              },
              "#1d1a05": {
                bg: "#1D1A05",
                color: "#FEFAF1",
              },
              "#333333": {
                bg: "#333333",
                color: "#FEFAF1",
              },
              "#ec9f05": {
                bg: "#EC9F05",
                _hover: {
                  bg: "#BBDB9B",
                  color: "#FEFAF1",
                },
              },
              "#d76a03": {
                bg: "#D76A03",
                color: "#FEFAF1",
                _hover: {
                  bg: "#BBDB9B",
                  color: "#D76A03",
                },
              },
              "#bbdb9b": {
                bg: "#BBDB9B",
                color: "#333333",
                _hover: {
                  bg: "#EC9F05",
                  color: "#FEFAF1",
                },
              },
              "#abc4a1": {
                bg: "#ABC4A1",
                _hover: {
                  bg: "#EC9F05",
                  color: "#FEFAF1",
                },
              },
              "#9db4ab": {
                bg: "#9DB4AB",
                color: "#333333",
                _hover: {
                  bg: "#EC9F05",
                  color: "#FEFAF1",
                },
              },
              "#fefaf1": {
                bg: "transparent",
                color: "#FEFAF1",
                border: "2px solid #FEFAF1",
                _hover: {
                  bg: "#BBDB9B",
                  color: "#FEFAF1",
                },
              },
              "#91b7c7": {
                bg: "#91B7C7",
                color: "#333333",
                _hover: {
                  bg: "#EC9F05",
                  color: "#FEFAF1",
                },
              },
              "cta": {
                bg: "#D76A03",
                size: "lg",
                // color: "#FEFAF1",
                border: "4px solid #1D1A05",
                _hover: {
                  bg: "#ABC4A1",
                  color: "#FEFAF1",
                },
              },
              "ctainverted": {
                bg: "#ABC4A1",
                size: "lg",
                // color: "#FEFAF1",
                border: "3px solid #1D1A05",
                _hover: {
                  bg: "#D76A03",
                  color: "#FEFAF1",
                },
              },
                "ctagreen": {
                  bg: "#BBDB9B",
                  size: "lg",
                  color: "#333333",
                  border: "3px solid #1D1A05",
                  _hover: {
                    bg: "#EC9F05",
                    color: "#FEFAF1",
                  },
              },
            },
            defaultProps: {
              // variant: 'outline', // default is solid
            },
          }
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
            max-width: 100vw;
          }
          html {
            scroll-behavior: smooth;
            
          }

         @font-face {
          font-family: "Amalta";
          font-style: normal;
          font-weight: normal;
          font-display: fallback;
          src: url("${Amalta}") format("truetype");
        }
        @font-face {
          font-family: "Graphik";
          font-style: normal;
          font-weight: normal;
          font-display: fallback;
          src: url("${Graphik}") format("truetype");
        }
        @font-face {
          font-family: "GraphikSemibold";
          font-style: normal;
          font-weight: normal;
          font-display: fallback;
          src: url("${GraphikSemibold}") format("truetype");
        }
        @font-face {
          font-family: "GraphikBlack";
          font-style: normal;
          font-weight: normal;
          font-display: fallback;
          src: url("${GraphikBlack}") format("truetype");
        }
        @font-face {
          font-family: "Produkt";
          font-style: normal;
          font-weight: normal;
          font-display: fallback;
          src: url("${Produkt}") format("truetype");
        }
          /* li {
            line-height: 1.85em;
          } */
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
          /* li {
            margin-bottom: 10px;
            line-height: 1.55em;
            font-size: 17px;
          } */
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

    <stickyContext.Provider value={{isSticky, setSticky}}>
      <Navbar sticky={isSticky} menuItems={menuItems} menuData={menuData} siteDomain={siteDomain} siteName={siteName} />

      <Switch>
        <Loading when={data.isFetching || !isFontLoaded} />
        <List when={isBlog} />
        <Post when={data.isPost} />
        <Page when={data.isPage} />
        <Error when={data.isError} />
      </Switch>
      
      <Footer footerItems={footerItems} footerData={footerData}/>
    </stickyContext.Provider>
      </ChakraProvider>
    )
  }
  
  export default connect(Root);
