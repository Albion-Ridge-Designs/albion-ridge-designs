import React, { useState, useEffect } from 'react'
import { connect } from "frontity";
import { AspectRatio, HStack, Image, Skeleton, Stack, useBreakpointValue } from '@chakra-ui/react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import { Carousel, CarouselIconButton, CarouselSlide, useCarousel } from './carousel'
import Loading from "../loading";

function Gallery({ state, rootProps, images }) {
  const [index, setIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const slidesPerView = useBreakpointValue({
    base: 3,
    md: 5,
  })
  const [ref, slider] = useCarousel({
    slides: {
      perView: slidesPerView,
      spacing: useBreakpointValue({
        base: 16,
        md: 24,
      }),
    },
    slideChanged: (slider) => setCurrentSlide(slider.track.details.rel),
  })

  useEffect(() => {
    setLoading(false);
  }, []);

//   useEffect(() => {
//     const intervalId = setInterval(
//       () => setIndex((index) => index + 1),
//       2000, // every 3 seconds
//     );
//     return () => clearTimeout(intervalId);
//   }, []);

  if (loading) {
    return <Loading />
  }

  if (!loading) {
    return (
      <Stack spacing="4" {...rootProps} p={10} bg="brand.100" minHeight="85vh">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={images[index].src}
            objectFit="scale-down !important"
            alt={images[index].alt}
            fallback={<Skeleton />}
          />
        </AspectRatio>
        <HStack spacing="4">
          <CarouselIconButton
            onClick={() => slider.current?.prev()}
            icon={<IoChevronBackOutline />}
            aria-label="Previous slide"
            disabled={currentSlide === 0}
          />
          <Carousel ref={ref} direction="row" width="full">
            {images.map((image, i) => {
                return (
              <CarouselSlide key={i} onClick={() => setIndex(i)} cursor="pointer">
                <AspectRatio
                  ratio={4 / 3}
                  transition="all 200ms"
                  opacity={index === i ? 1 : 0.4}
                  _hover={{
                    opacity: 1,
                  }}
                >
                  <Image src={image.src} objectFit="cover" alt={image.alt} fallback={<Skeleton />} />
                </AspectRatio>
              </CarouselSlide>
            )})}
          </Carousel>
          <CarouselIconButton
            onClick={() => slider.current?.next()}
            icon={<IoChevronForwardOutline />}
            aria-label="Next slide"
            disabled={currentSlide + Number(slidesPerView) === images.length}
          />
        </HStack>
      </Stack>
    )
  }
}

export default connect(Gallery);
