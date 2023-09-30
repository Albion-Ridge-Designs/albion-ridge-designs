import React from "react";
import { connect } from "frontity";
import {
    SimpleGrid
  } from '@chakra-ui/react';
import Square from "./square";

const PhotoSquares = ({ state, libraries, items }) => {
    const itemsArr = Object.values(items);
    const numberOfItems = itemsArr.length;
    const halved = numberOfItems / 2;
    const halfOfHalved = halved / 2;
    const tripleHalved = halfOfHalved / 2;
    const finalHalved = 2 * Math.round(halved / 2);
    const finalHalfOfHalved = 2 * Math.round(halfOfHalved / 2);
    const finalTripleHalved = 2 * Math.round(tripleHalved / 2);
    return (
        <>
            {numberOfItems <= 4 &&
                <SimpleGrid
                    columns={{
                    base: 2,
                    md: 2,
                    lg: numberOfItems,
                    }}
                    rowGap={{
                    base: '0',
                    // md: '12',
                    }}
                    columnGap="0"
                    bg="brand.700"
                >
                {itemsArr.map((item, idx) => {
                    return (
                        <Square image={item.image} caption={item.hover_text} link={item.link} key={idx} />
                )
                }
                )}
                
                </SimpleGrid>
            }

            {numberOfItems > 4 && 
                <SimpleGrid
                    columns={{
                    base: finalTripleHalved,
                    md: finalHalfOfHalved,
                    lg: finalHalved,
                    }}
                    rowGap={{
                    base: '0',
                    // md: '12',
                    }}
                    columnGap="0"
                    bg="brand.700"
                >
                {itemsArr.map((item, idx) => {
                    return (
                        <Square image={item.image} caption={item.hover_text} link={item.link} key={idx} />
                )
                }
                )}
                </SimpleGrid>
            } 
    </>
    )
}

export default connect(PhotoSquares)
